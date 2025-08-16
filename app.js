const mongoose = require('mongoose')
const port = 3006;
const express = require('express')
const productRouter =require('./routers/productRouter')

const app = express()


app.get('/',(req,res)=>{
    res.send("hello")
})
app.use(express.json())
app.use('/products',productRouter)



async function main() {
  await mongoose.connect(
    'mongodb+srv://anjukdas7777:MZ1g2GLA7ams43VX@cluster1.zbcf9f0.mongodb.net/ProductDB');

}

main()
.then(()=>console.log("Database Connected"))
.catch(err=> console.log(err))


const productData =require('./models/product')

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});