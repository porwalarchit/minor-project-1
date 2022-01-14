import React from 'react'
import {Card, Button,Container} from 'react-bootstrap';
import Landingpage from './Landingpage';

function ProductCard({prod}) {
    return (
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={prod.image} />
  <Card.Body>
    <Card.Title>{prod.name}</Card.Title>
    <Card.Text>
     {prod.description}
    </Card.Text>
    <Button variant="primary">View Product</Button>
  </Card.Body>
  </Card>
    )
}

export default ProductCard
