const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {type:String, required:true, unique:true},
    image: {type:String, required:true},
    price: {type:Number, required:true, default:0},
    category: {type:String, required:true},
    description: {type:String, required:true},
    countInStocks: {type:Number, required:true, default:0},
    ratings: {type:Number, required:true, default:0},
    numOfReviews: {type:Number, required:true, default:0}
})  

module.exports = mongoose.model("Product", productSchema);