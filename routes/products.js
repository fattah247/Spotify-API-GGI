const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const Order = require('../models/order');

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json({ products });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get orders associated with a product
router.get('/:id/orders', async (req, res) => {
  try {
    const orders = await Order.find({ 'products.product': req.params.id }).populate('user_id', 'username email');
    res.json({ orders });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create a new product
router.post('/', async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.json(newProduct);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update a product
router.patch('/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete a product
router.delete('/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
