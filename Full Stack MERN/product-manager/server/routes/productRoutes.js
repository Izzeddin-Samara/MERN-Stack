const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Create Product (POST request)
router.post('/', productController.createProduct);

module.exports = router;
