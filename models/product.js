const mongoose = require("mongoose")

const productSchema =new mongoose.Schema({
    title : String,
    price : Number,
    description : String,
    image : String
    

})

const product = mongoose.model('product',productSchema)
module.exports = product