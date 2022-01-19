import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { Container } from 'react-bootstrap';
import NavBar from '../layoutcomponents/NavBar';
import CartProd from './CartProd';
import './Landingpage.css'
import backgroundImage from './backgroundimage.jpg'

const MyCart = ()=> {
    let sum=0;
    const [product, setProduct] = useState([])
    const totsum = ()=>{
        product.map((prod)=>(
            sum = sum+ prod.price
    ))
    }
    useEffect(() => {
      const config = {
          headers:{
        authorization:localStorage.getItem("jwtToken")
          }
    };
    axios.get("http://localhost:2000/user/cart", config).then(async (res) => {
        setProduct(res.data.cartItems)
        console.log(res);
    }
    ).catch((err) => { console.error(err); })
    }, [])
    totsum();
    return (
        <div>
            <NavBar/>
    <Container className= " my-5">
            <div style={{fontSize:"380%",marginBottom:"5%",textAlign:"center"}}><b>Your Cart</b></div>
            {product.map((prod)=>(
                    <CartProd key = {prod._id} prod = {prod}></CartProd>

            ))}
            <div style={{fontSize:"380%",marginTop:"2%",marginBottom:"5%",textAlign:"right"}}><b>Total: </b> ₹{sum}</div>
</Container>
</div>
    )
}

export default MyCart;
