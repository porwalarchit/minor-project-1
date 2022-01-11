const productSchema = require("../models/productsSchema.js")

module.exports =  getProducts = (req, res) => {


    try {

        productSchema.find().then((products) => {
            // console.log(products)
            res.send(products)
        })

    } catch (error) {
        // console.log(error) ;
        res.send(error)
    }

}