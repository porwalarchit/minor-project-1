const jwt = require("jsonwebtoken");

module.exports = generateToken = (username) => {
    return jwt.sign({username}, process.env.JWT_Secret, {
        expiresIn: '2h'
    })
}