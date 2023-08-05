const express = require('express');
const router = express.Router();
const Order = require('../models/order');
const Product = require('../models/product');

// Get all orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().populate('user_id', 'username email');
    res.json({ orders });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get order by ID
router.get('/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('user_id', 'username email');
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get products associated with an order
router.get('/:id/products', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('products.product');
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    const products = order.products.map((item) => item.product);
    res.json({ products });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create a new order
router.post('/', async (req, res) => {
  try {
    const { user_id, products } = req.body;
    const total = products.reduce((acc, curr) => acc + curr.quantity * curr.product.cost, 0);
    const newOrder = await Order.create({ user_id, total, products });
    res.json(newOrder);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update an order
router.patch('/:id', async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete an order
router.delete('/:id', async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
