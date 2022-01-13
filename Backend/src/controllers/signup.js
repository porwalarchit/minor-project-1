const Register = require("../models/userSchema.js")

module.exports = signup = async (req, res) => {
    try {
        if (req.body.password === req.body.confirmpassword) {
            const userRegister = new Register({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                // confirmpassword: req.body.confirmpassword
            })

            const registered = await userRegister.save();

            return res.status(200).json({
                message: "User Registered"
            });
        }

        else {
            return res.status(300).json({
                message: "Passwords are not matching"
            });
        }

    }
    catch (error) {
        console.log(error)
        return res.status(400).json({
            error
        });
    }
}