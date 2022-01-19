const cartSchema = require ("../models/cartSchema.js");

module.exports = getCartItems = (req, res) =>{
    cartSchema.find({username:req.user.username}).then(cartItems=>{
        return res.status(200).json({
            cartItems
        })
    }).catch((err)=>{
        return res.status(402).json({
            message:"No products found"
        })
    })
}