const userSchema = require("../models/userSchema.js");
const generateToken = require("./generateToken.js");
const bcrypt = require("bcrypt");

module.exports = signin = (req, res) => {
  userSchema.findOne({ username: req.body.username }).exec((error, user) => {
    if (user) {
      if (bcrypt.compare(req.body.password, user.hash_password)) {
        const user_payload = { username: req.body.username }; //* payload

        return res.status(200).json({
          jwt_token: generateToken(user.username),
          message: 'Login Successfully',
        });
      } else {
        return res.status(201).json({
          message: 'Invalid Login Credentials',
        });
      }
    } else {
      return res.status(202).json({
        message: 'Not registered!! Register first',
      });
    }
  });
};
