import mongoose from 'mongoose'
let productSchema = new mongoose.Schema({

})
let products = mongoose.model("products", productSchema)

export default products