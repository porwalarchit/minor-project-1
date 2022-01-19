const userSchema = require("../models/userSchema.js");
const generateToken = require("./generateToken.js");
const bcrypt = require("bcrypt");

module.exports = signin = async(req, res) =>{
    try{
        const user = await userSchema.findOne({username:req.body.username});
        
        bcrypt.compare(req.body.password, user.hash_password, (err, data)=>{
            if(err){
                return res.status(401).json({
                    err
                })
            }
            if(data){
                return res.status(201).json({
                    message: "Login Successful",
                    jwt_token: generateToken(user.username)
                })
            }
            else{
                return res.status(301).json({
                    message: "Invalid Login Credentials"
                })
            }
        })
    }
    catch(error){
        return res.status(400).json({
            message: "User Not Registered"
        })
    }
}
