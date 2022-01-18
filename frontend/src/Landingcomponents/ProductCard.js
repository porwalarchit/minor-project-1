import React from 'react'
import {Card, Button,Container} from 'react-bootstrap';
import ProductPage from './ProductPage';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function ProductCard({prod}) {
    return (
    <Card style={{ width: '22rem', height: '32rem',marginBottom:"15px"}}>
  <Card.Img variant="top" src={prod.image}  style={{ height: '25rem'}}/>
  <Card.Body>
    <Card.Title  style={{fontSize:"17px"}}>{prod.name}</Card.Title>
    <Card.Text>Price: ₹{prod.price}</Card.Text>
    <Link to={`/product/${prod._id}`}><Button variant="primary" >View Product</Button></Link>
  </Card.Body>
  </Card>
    )
}

export default ProductCard

