const jwt = require("jsonwebtoken");

module.exports = authenticateToken = async(req, res, next) => {
    // const authHeader = req.headers['authorization'];
    // console.log(authHeader);
    // console.log(req.headers["authorization"])
    const token = await req.headers["authorization"] || req.body.jwt_token ;
    console.log(token)
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