// product.js (models/product.js)
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  ProductID: { type: String, required: true },
  LinkProduct: { type: String, required: true },
  Title: { type: String, required: true },
  Price: { type: Number, required: true },
  VideoID: { type: String, required: true }, // Reference to the Video model
});

module.exports = mongoose.model('Product', productSchema);
