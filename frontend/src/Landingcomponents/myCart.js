import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { Container } from 'react-bootstrap';
import NavBar from '../layoutcomponents/NavBar';
import CartProd from './CartProd';
import {faShoppingCart,faMoneyBill} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
        <div style={{backgroundColor:"#fcfaf5"}}>
            <NavBar/>
    <Container>
            <div style={{fontSize:"380%",paddingTop:"2%",textAlign:"center"}}><b>Your Cart</b> <FontAwesomeIcon icon={faShoppingCart} /></div>
            <h2 style={{fontSize:"150%",paddingBottom:"5%",textAlign:"center"}}>({product.length==0?"Your cart is Empty!":"Total items: "+product.length})</h2>
            {product.map((prod)=>(
                    <CartProd key = {prod._id} prod = {prod}></CartProd>

            ))}
            <div style={{paddingRight:"5%",fontSize:"380%",paddingTop:"2%",paddingBottom:"5%",textAlign:"right",color:"red"}}><FontAwesomeIcon style={{color:"green"}} icon={faMoneyBill} /> <b style={{color:"black"}}> Total: </b> ₹{sum}</div>
</Container>
</div>
    )
}

export default MyCart;
