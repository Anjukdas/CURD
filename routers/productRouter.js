const express = require('express')
const { getProducts, getProductsById ,createProduct, updateProduct} = require('../controller/productController')
const productRouter =express.Router()



productRouter.get('/',getProducts)
productRouter.get('/:id',getProductsById)
productRouter.post('/',createProduct)
productRouter.patch('/:id',updateProduct)






module.exports = productRouter