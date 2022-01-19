const cartSchema = require("../models/cartSchema.js");
const productsSchema = require("../models/productsSchema.js");

module.exports = addItemtoCart = (req, res) =>{

    productsSchema.findById(req.params.id).then(product=>{

        const cartItem = new cartSchema({
            _id:product._id,
            username:req.user.username,
            name:product.name,
            image:product.image,
            price:product.price,
            countInStocks:product.countInStocks
        })

        cartItem.save().then((item)=>{
            return res.status(200).json({
                message:"Added to Cart"
            })
        }).catch(err=>{
            return res.status(402).json({
                err
            })
        })

    }).catch(err=>{
        console.log(err)
    })
}