const mongoose = require('mongoose');

// Sales Schema
const SalesSchema = new mongoose.Schema({
  product_name: String,
  quantity_sold: Number,
  date: Date,
});

const Sales = mongoose.model('Sales', SalesSchema);

// Fetch sales data based on a query
async function fetchSalesData(query) {
  const salesData = await Sales.find({
    // Example query: Find sales in January 2024
    date: { $gte: new Date('2024-01-01'), $lte: new Date('2024-01-31') },
  });
  return salesData;
}

module.exports = { fetchSalesData };
