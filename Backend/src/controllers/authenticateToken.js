const jwt = require("jsonwebtoken");

module.exports = authenticateToken = (req, res, next) => {
    // const authHeader = req.headers['authorization'];
    // console.log(authHeader);
    const token = req.headers["authorization"]
    // console.log(token);
    if(token==null){
        return res.status(402).json({
            auth: false,
            message: "No Authorization"
        })
    }
    
    jwt.verify(token, process.env.JWT_Secret, (err, user) => {
        if(err){
            return res.status(405).json({
                auth: false,
                message: "No Access"
            })
        }

        if(user){
            req.user = user;
        }
        next();
    })
}