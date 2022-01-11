const express = require("express");     
const app = express();
const conn = require("./db/conn");
const signup = require("./controllers/signup");
const addProduct = require("./controllers/addProduct.js")
const getProducts = require("./controllers/getProducts.js")
const cors = require("cors")

const port = process.env.PORT || 2000;

app.use(express.json()); 
app.use(cors("*"))

conn();

app.post("/register",signup);
app.post("/addproducts",addProduct);
app.post("/products",getProducts)


app.listen(port, ()=>{
    console.log(`Server running at port ${port}`);
})