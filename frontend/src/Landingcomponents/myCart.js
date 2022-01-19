import React, { useState } from 'react'
import { Container,Table } from 'react-bootstrap';
import NavBar from '../layoutcomponents/NavBar';

const MyCart = ()=> {
    const [product, setProduct] = useState([])
    return (
        <div>
            <NavBar/>
    <Container>
            <div style={{fontSize:"380%"}}><b>Your Cart</b></div>
    <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
</Container>
            {/* <Container style={{marginBottom:"3%"}}>

            {products.map((product)=>(
                    <CartProd key = {product.id} prod = {product}></CartProd>

            ))}
        </Container> */}
        </div>
    )
}

export default MyCart;
