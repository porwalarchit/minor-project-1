import React, {useEffect, useState} from 'react'
import backgroundImage from './backgroundimage.jpg'
import axios from 'axios';
import  { Row,Col, Container,Carousel } from 'react-bootstrap';
import ProductCard from './ProductCard';
import './Landingpage.css'

function Landingpage() {
    const [products, setProducts] = useState([]);
    const productsServer = "http://localhost:2000/products";

    const productCall = ()=>{
        axios.get(productsServer)
        .then(async (response)=> {
            await setProducts(response.data)

        })
        .catch(error=>console.error({error}));
    }
    useEffect(()=>{productCall();},[]);

    return (
     <div>  
         
         <div style={{backgroundImage: `url(${backgroundImage})`, paddingTop:"50px",paddingBottom:"40px"}}>
        <div className='field' >
        <Carousel>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src= "https://ih1.redbubble.net/image.394119567.2874/st,small,507x507-pad,600x600,f8f8f8.u4.jpg"
      alt="First slide"
      style={{height: "300px",width:"100px"}}
    />
    <h3>First slide label</h3>
      <h2>Nulla vitae elit libero, a pharetra augue mollis interdum.</h2>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src="https://dotbadges.com/wp-content/uploads/2021/05/Stickerview1-167.webp"
      alt="Second slide"
      style={{height: "300px",width:"100px"}}
    />
  </Carousel.Item>
  <Carousel.Item  interval={2000}>
    <img
      className="d-block w-100"
      src="https://ih1.redbubble.net/image.318707736.3796/st,small,507x507-pad,600x600,f8f8f8.jpg"
      alt="Third slide" style={{height: "300px",width:"100px"}}
    />
  </Carousel.Item>
</Carousel>
        </div>
        </div>
        <div style= {{padding:"20px",color:"#e8e8e3",textShadow:"2px 2px 1px #00a835",fontSize:"55px", fontWeight:"bolder"}}>
            Design your own sticker
            </div>
            <div style= {{color:"#e8e8e3",textShadow:"2px 2px 1px #00a835",textAlign:"center",fontSize:"45px", fontWeight:"bolder"}}>Create Your Own Custom</div>
 <div style= {{color:"#485254",textShadow:"2px 2px 1px #00beed",textAlign:"center",fontSize:"70px", fontWeight:"bolder",}}>Stickers</div>   
          
        <Container>

            <Row className='d-flex align-items-center justify-content-center' >

            {products.map((product)=>(
                <Col sm={12} md={6} xl={3} >
                    <ProductCard key = {product.id} prod = {product}></ProductCard>

                </Col>
            ))}
            </Row>

        </Container>
        </div> 
    )
}

export default Landingpage
