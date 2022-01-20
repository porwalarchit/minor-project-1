const cartSchema = require("../models/cartSchema.js");

module.exports = deletefromCart = (req, res) => {

    cartSchema.deleteOne({ "_id": req.params.id }).then(item => {
        return res.status(200).json({
            message: "Item deleted Successfully",
            item
        })
    }).catch(err => {
        // console.log(err)
        return res.status(402).json({
            message: "Some error Occured",
            err,
        })
    })

}