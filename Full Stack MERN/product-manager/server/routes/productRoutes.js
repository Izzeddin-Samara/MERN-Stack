const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');


router.post('/', productController.createProduct);
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.put('/update/:id', productController.UpdateProduct);
router.delete('/delete/:id', productController.DeleteProduct);

module.exports = router;
