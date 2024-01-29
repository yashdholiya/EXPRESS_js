
const express = require('express');
const productRoutes = express.Router(); // Change this line
const productController = require('../controller/product_1.controller');

// Create New Product
productRoutes.post('/add-product', productController.addProduct);
// // Get All Product
productRoutes.get('/', productController.getAllProduct);
// // Get Specific Product
productRoutes.get('/get-product', productController.getProduct);
// // Update Specific Product
productRoutes.put('/update-product', productController.updateProduct);
// // Delete Specific Product
productRoutes.delete('/delete-product|', productController.deleteProduct);


module.exports=productRoutes;