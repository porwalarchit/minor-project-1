import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Landingpage.css'

function CartProd({prod}) {
    return (
        <div>
            <Link to={`/product/${prod._id}`} style = {{textDecorationLine:"none"}}>
            <Row className= "border rounded my-2" style = {{backgroundColor:"#ede9df"}}>
                <Col  md={2} style = {{height:"150px"}}>
                <img style = {{height:"100%"}} src={prod.image} alt={prod.name}/>
                </Col>
                <Col  md={8} style = {{ color:"black"}}>
                <h1>{prod.name}</h1>
                </Col>
                <Col md={2} style={{marginTop:"4%", color:"black"}}>
                <h3>Price: <b>₹{prod.price}</b></h3>
                </Col>
            </Row>
            </Link>
        </div>
    )
}

export default CartProd
