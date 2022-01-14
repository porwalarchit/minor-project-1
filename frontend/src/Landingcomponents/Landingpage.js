import React, {useEffect, useState} from 'react'
import backgroundImage from './backgroundimage.jpg'
import axios from 'axios';
import reactboot from 'react-bootstrap';
import ProductCard from './ProductCard';

function Landingpage() {
    const [products, setProducts] = useState([]);
    const productsServer = "http://localhost:2000/products";

    const productCall = ()=>{
        axios.post(productsServer)
        .then(async (response)=> {
            await setProducts(response.data)

        })
        .catch(error=>console.error({error}));
    }
    useEffect(()=>{productCall();},[]);

    return (
     <div>  <div style={{ backgroundImage: `url(${backgroundImage})`, paddingTop:"150px",paddingBottom:"150px"}}>
 <h1 style = {{color:"#1bb3c4", fontSize:"30px"}}>Create Your Own Custom</h1>    
        </div>
        <h1/>
        <div>
            {products.map((product)=>(
                <ProductCard key = {product.id} prod = {product}></ProductCard>
            ))}
        </div>
        </div> 
    )
}

export default Landingpage
