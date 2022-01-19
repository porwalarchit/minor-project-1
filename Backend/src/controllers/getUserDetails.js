const userSchema = require("../models/userSchema.js");
// const jwt = require("jsonwebtoken");
// const authenticateToken = require("./authenticateToken.js");

module.exports = getUserDetails = (req, res) => {
    userSchema.findOne({username:req.user.username}).exec((err, user) => {
        if(err){
            return res.status(401).json({
                message:"User Not Found",
            })
        }
        if(user){   
            return res.status(200).json({
                firstname: user.firstname,
                lastname: user.lastname,
                username: user.username,
                email: user.email,
            })
        }
    })
}