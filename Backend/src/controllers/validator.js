const {check, validationResult} = require("express-validator");

const validateSignupRequest = [
    check('firstname')
    .notEmpty()
    .withMessage('First name is required!!'),

    check('lastname')
    .notEmpty()
    .withMessage('Last name is required!!'),

    check('username')
    .notEmpty()
    .withMessage('User name is required!!'),

    check('email')
    .isEmail()
    .withMessage('Valid email is required!!') ,

    check('password')
    .notEmpty()
    .withMessage('Password is required!!')
]

const validateSigninRequest = [
    check('username')
    .notEmpty()
    .withMessage("Valid username is required!!") ,
    
    check('password')
    .notEmpty()
    .withMessage('Password is required!!'),
]

const isRequestValidated = (req,res,next) => { 
    const errors = validationResult(req) ; 
    if(errors.array().length > 0 ){
        return res.status(210).json({
            msg: errors.array()[0].msg,
        });
    }
    next() ; 
}

module.exports = {validateSignupRequest, validateSigninRequest, isRequestValidated};