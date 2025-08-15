// const product = require('../models/product')
const productData = require('../models/product')



const getProducts = async (req, res) => {
    try {
        const products = await productData.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
const getProductsById = async (req, res) => {
    try {

        const Pid = req.params.id
        const products = await productData.findById(Pid)
        if (!products) return res.status(404).json({ message: 'product not found' })
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const createProduct = async (req, res) => {
    try {
        const { title, price, description, image } = req.body
        const newProduct =new productData({title,price,description,image})
        await newProduct.save()
        res.status(201).json(newProduct)

    } catch (error) {
        res.status(500).json({ error: error.message })


    }
}
const updateProduct = async (req, res) => {
    try {
        const Pid = req.params.id
        const products = await productData.findByIdAndUpdate(Pid,req.body,{new:true})
        if (!products) return res.status(404).json({ message: 'product not found' })
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getProducts,
    getProductsById,
    createProduct,
    updateProduct
}