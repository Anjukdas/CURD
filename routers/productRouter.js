const express = require('express')
const { getProducts, getProductsById ,createProduct, updateProduct, deleteProduct} = require('../controller/productController')
const productRouter =express.Router()



productRouter.get('/',getProducts)
productRouter.get('/:id',getProductsById)
productRouter.post('/',createProduct)
productRouter.patch('/:id',updateProduct)
productRouter.delete('/:id',deleteProduct)






module.exports = productRouter