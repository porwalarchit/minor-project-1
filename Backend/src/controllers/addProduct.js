const productsData = require("../data/productsData");
const productSchema = require("../models/productsSchema");

module.exports = addProduct = async(req,res) => {
    try {
        await productSchema.deleteMany();

        const sampleProducts = productsData.map(Product =>{
            return {...Product}
        })

        await productSchema.insertMany(sampleProducts);
        
        return res.status(200).json({
            message: "Products Added"
        })
    } 
    catch (error) {
        console.log(error)
        return res.status(310).json({
            error
        })
    }
}
