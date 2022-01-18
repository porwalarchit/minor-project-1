const express = require("express");     
const app = express();
const conn = require("./db/conn");
const signup = require("./controllers/signup");
const signin = require("./controllers/signin");
const addProduct = require("./controllers/addProduct.js");
const getProducts = require("./controllers/getProducts.js");
const getProductsbyId = require("./controllers/getProductsbyId.js");
const cors = require("cors");

const port = process.env.PORT || 2000;

app.use(express.json()); 
app.use(cors("*"))

conn();

app.post("/register",signup);
app.post("/login",signin);

app.post("/addproducts",addProduct);
app.get("/products",getProducts)
app.get("/products/:id", getProductsbyId);

app.listen(port, ()=>{
    console.log(`Server running at port ${port}`);
})