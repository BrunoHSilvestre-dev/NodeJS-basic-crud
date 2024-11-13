const express = require('express');
const Product = require('../models/product');
const router = express.Router();

// Create Product
router.post('/products', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
});

// List Products
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Find Product by ID
router.get('/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).send();
    res.send(product);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update Product
router.put('/products/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, 
        { new: true, runValidators: true });
    if (!product) return res.status(404).send();
    res.send(product);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete Product
router.delete('/products/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).send();
    res.send(product);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
