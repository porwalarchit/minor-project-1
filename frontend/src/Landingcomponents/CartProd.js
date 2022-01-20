import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Landingpage.css'

function CartProd({prod}) {
    return (
        <div>
            <Link to={`/product/${prod._id}`} style = {{textDecorationLine:"none"}}>
            <Row className= "border rounded" style = {{height:"100%",width:"100%",backgroundColor:"#ede9df",marginBottom:"1%"}}>
                <Col  md={2} sm = {2} style = {{height:"150px"}}>
                <img style = {{height:"100%"}} src={prod.image} alt={prod.name}/>
                </Col>
                <Col  md={8} sm = {8} style = {{ color:"black"}}>
                <h1 style = {{fontSize:"300%"}}>{prod.name}</h1>
                </Col>
                <Col md={2} sm = {2} style={{marginTop:"4%", color:"black"}}>
                <h3 style = {{fontSize:"170%"}}>Price: <b>₹{prod.price}</b></h3>
                </Col>
            </Row>
            </Link>
        </div>
    )
}

export default CartProd
