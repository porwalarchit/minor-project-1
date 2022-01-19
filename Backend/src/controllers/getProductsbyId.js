const productsSchema = require("../models/productsSchema.js");

module.exports = getProductsbyId = async (req, res) =>{
    try {
        let productDetails = await productsSchema.findById(req.params.id);
        if(productDetails){
            res.status(200).json(productDetails)
        }
        else{
            res.status(406).json({
                message:'Product not found'
            })
        }
    } catch (err) {
        res.status(500).json({
            status: false,
            error: err
        })
    }
}