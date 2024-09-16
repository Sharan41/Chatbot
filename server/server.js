const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const axios = require('axios');

// Load environment variables from config.env
dotenv.config({ path: './config.env' });

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection using ATLAS_URI
mongoose.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected...');
}).catch((err) => {
    console.error('MongoDB connection error:', err);
});


const Query = mongoose.model('Query', new mongoose.Schema({
    userQuery: String,
    chatbotResponse: String,
    createdAt: { type: Date, default: Date.now }
}));

const SalesData = mongoose.model('SalesData', new mongoose.Schema({
    product: String,
    sales: Number,
    inventory: Number,
    date: Date,  
    createdAt: { type: Date, default: Date.now }
}));


const insertSalesData = async () => {
    try {
        const salesDataEntries = [
            { product: 'Laptop', sales: 50, inventory: 20, date: new Date('2024-09-10') },
            { product: 'Smartphone', sales: 100, inventory: 30, date: new Date('2024-09-11') },
            { product: 'Tablet', sales: 70, inventory: 25, date: new Date('2024-09-12') },
            { product: 'Headphones', sales: 150, inventory: 50, date: new Date('2024-09-13') },
            { product: 'Smartwatch', sales: 200, inventory: 40, date: new Date('2024-09-14') },
        ];

        for (let salesData of salesDataEntries) {
            const newSalesData = new SalesData(salesData);
            await newSalesData.save();
        }

        console.log('Sales data inserted successfully');
    } catch (err) {
        console.error('Error inserting sales data:', err);
    }
};

// Call the function to insert the sales data
insertSalesData();

// Fetch sales data based on a query
async function fetchSalesData(query) {
    const { startDate, endDate, limit = 5 } = query;
    const salesData = await SalesData.find({
        date: { $gte: new Date(startDate), $lte: new Date(endDate) }
    }).limit(limit);
    return salesData;
}

// Use Hugging Face API to query GPT-Neo
const getLLMResponse = async (userQuery) => {
    const API_URL = "https://api-inference.huggingface.co/models/EleutherAI/gpt-neo-2.7B";  
    const headers = { "Authorization": `Bearer ${process.env.HUGGINGFACE_API_KEY}` };

    try {
        const response = await axios.post(API_URL, { inputs: userQuery }, { headers });
        return response.data[0]?.generated_text || 'No response';
    } catch (error) {
        console.error('Error querying GPT-Neo:', error);
        return 'Error generating response';
    }
};

// REST API Endpoints

// POST /api/chat - Handle chatbot interaction, combining LLM responses and sales data
app.post('/api/chat', async (req, res) => {
    const { userQuery, startDate, endDate, limit } = req.body;  

    try {
        
        const llmResponse = await getLLMResponse(userQuery);
        const llmResponseLower = llmResponse.toLowerCase();

        
        if (llmResponseLower.includes('sale') || llmResponseLower.includes('product') || llmResponseLower.includes('inventory') || llmResponseLower.includes('stock')) {
            
          
            const salesData = await fetchSalesData({ startDate, endDate, limit });
            
            if (salesData.length > 0) {
                const salesList = salesData.map(data => 
                    `Product: ${data.product}, Sales: ${data.sales}, Inventory: ${data.inventory}, Date: ${data.date}`
                ).join('\n');

                
                const structuredSalesData = `Sales Data:\n${salesList}\n\nBased on this data, what insights can you provide?`;

               
                const combinedPrompt = `${userQuery}\n\n${structuredSalesData}`;
                const llmInsightResponse = await getLLMResponse(combinedPrompt);

                
                const combinedResponse = `LLM Response: ${llmInsightResponse}\n\nSales Data from ${startDate} to ${endDate}:\n\n${salesList}`;
                
                
                const newQuery = new Query({ userQuery, chatbotResponse: combinedResponse });
                await newQuery.save();

                
                return res.status(200).json({ response: combinedResponse });
            } else {
                return res.status(404).json({ response: 'No sales data found for the given date range.' });
            }
        } else {
            
            const newQuery = new Query({ userQuery, chatbotResponse: llmResponse });
            await newQuery.save();

            return res.status(200).json({ response: llmResponse });
        }
    } catch (err) {
        console.error('Error processing chat query:', err);
        res.status(500).json({ error: 'Something went wrong' });
    }
});


// POST /api/sales - Direct sales data query endpoint
// POST /api/sales - Direct sales data query endpoint
app.post('/api/sales', async (req, res) => {
    const { startDate, endDate, limit } = req.body;

    try {
        
        const salesData = await fetchSalesData({ startDate, endDate, limit });

        if (salesData.length > 0) {
            
            return res.status(200).json({ response: salesData });
        } else {
            return res.status(404).json({ response: [] });
        }
    } catch (err) {
        console.error('Error fetching sales data:', err);
        res.status(500).json({ error: 'Could not fetch sales data' });
    }
});
// GET /api/history - Fetch Chat History
app.get('/api/history', async (req, res) => {
    try {
        const history = await Query.find().sort({ createdAt: -1 }).limit(10);
        res.status(200).json(history);
    } catch (err) {
        console.error('Error fetching history:', err);
        res.status(500).json({ error: 'Could not fetch history' });
    }
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
module.exports=app;