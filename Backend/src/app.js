const express = require("express");     
const app = express();
const conn = require("./db/conn");
const signup = require("./controllers/signup");
const signin = require("./controllers/signin");
const authenticateToken = require("./controllers/authenticateToken.js");
const getUserDetails = require("./controllers/getUserDetails");
const addProduct = require("./controllers/addProduct.js");
const getProducts = require("./controllers/getProducts.js");
const getProductsbyId = require("./controllers/getProductsbyId.js");
const cors = require("cors");
const {validateSignupRequest, validateSigninRequest, isRequestValidated} = require("./controllers/validator.js");

require('dotenv').config();

const port = process.env.PORT || 2000;

app.use(express.json()); 
app.use(cors("*"))

conn();

// app.get("/isauthenticated", authenticateToken);
app.get("/getuserdetails", authenticateToken, getUserDetails)
app.post("/register", validateSignupRequest, isRequestValidated, signup);
app.post("/login",validateSigninRequest, isRequestValidated, signin);

app.post("/addproducts",addProduct);
app.get("/products",getProducts);
app.get("/products/:id", getProductsbyId);

app.listen(port, ()=>{
    console.log(`Server running at port ${port}`);
})