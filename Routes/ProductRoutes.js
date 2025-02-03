
const productController = require('../controller/ProductController')
const router = require('express').Router()

router.get('/api/products', productController.getAllProducts);
router.get('/api/products/:id', productController.getSingleProduct)
router.post('/api/product',productController.addProduct)
router.put('/api/product',productController.updateProduct)
router.delete('/api/product/:id',productController.deleteProduct)

module.exports = router


