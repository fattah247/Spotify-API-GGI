// productController.js
const Product = require('../models/product');

// Product List (GET)
exports.getProductsByVideoID = async (req, res) => {
  try {
    const products = await Product.find({ VideoID: req.params.videoID }, 'ProductID LinkProduct Title Price');
    res.json({ products });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
