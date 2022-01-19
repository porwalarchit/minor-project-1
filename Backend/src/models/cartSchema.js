const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    _id:{type:mongoose.Schema.Types.ObjectId ,required:true},
    username:{type:String,required:true},
    name: {type:String, required:true, unique:true},
    image: {type:String, required:true},
    price: {type:Number, required:true, default:0},
    countInStocks: {type:Number, required:true, default:0},
})

module.exports = mongoose.model('Cart', cartSchema);