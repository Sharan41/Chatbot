const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { queryNeoGPT } = require('./neogpt');
const { fetchSalesData } = require('./database');

const app = express();

app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected...');
}).catch((err) => {
    console.error('MongoDB connection error:', err);
});

// Chat route
app.post('/api/chat', async (req, res) => {
  const userQuery = req.body.query;

  // Query the NeoGPT model for natural language query interpretation
  const llmResponse = await queryNeoGPT(userQuery);

  // Fetch sales data from MongoDB based on the LLM response
  const salesData = await fetchSalesData(llmResponse);

  // Combine responses and send back to the client
  const response = `Sales Data: ${JSON.stringify(salesData)} | LLM Response: ${llmResponse}`;
  res.json({ response });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
