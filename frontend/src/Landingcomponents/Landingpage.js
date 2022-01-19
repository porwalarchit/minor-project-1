import React, {useEffect, useState} from 'react'
import NavBar from '../layoutcomponents/NavBar'
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
        <NavBar/>
     <Container>
         <div style={{marginTop:"2%",backgroundImage: `url(${backgroundImage})`, paddingTop:"50px",paddingBottom:"40px"}}>
        <div className='field' >
        <Carousel style={{width:"100%",height:"40%"}}>
  <Carousel.Item interval={2000}>
    <Row>
    <Col  style={{height:"380px"}}>
    <img
      className="d-block w-90"
      src= "https://ih1.redbubble.net/image.394119567.2874/st,small,507x507-pad,600x600,f8f8f8.u4.jpg"
      alt="First slide"
      style={{height: "100%"}}
    />
    </Col>
    <Col >
      <h1 style={{fontSize:"550%",fontWeight:"bolder"}}>Latest Arrival!!!</h1><br/>
      <div style={{fontSize:"300%"}}>GET YOUR C++ STICKER NOW!!</div> 
      </Col>
      </Row>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
  <Row>
    <Col style={{height:"380px"}}>
    <img
      className="d-block w-90"
      src="https://dotbadges.com/wp-content/uploads/2021/05/Stickerview1-167.webp"
      alt="Second slide"
      style={{height: "100%"}}
    />
    </Col>
    <Col >
    <h1 style={{fontSize:"550%",fontWeight:"bolder"}}>Latest Arrival!!!</h1><br/>
      <div style={{fontSize:"300%"}}>IN LOVE WITH REACT? GET YOUR REACT STICKER NOW!!</div> 
    </Col>
      </Row>
  </Carousel.Item>
  <Carousel.Item  interval={2000}>
  <Row>
    <Col  style={{height:"380px"}}>
    <img
      className="d-block w-90 "
      src="https://ih1.redbubble.net/image.318707736.3796/st,small,507x507-pad,600x600,f8f8f8.jpg"
      alt="Third slide" style={{height: "100%"}}
    />
    </Col>
    <Col>
    <h1 style={{fontSize:"550%",fontWeight:"bolder"}}>Latest Arrival!!!</h1><br/>
      <div style={{fontSize:"300%"}}>GET YOUR NEW NODE.JS STICKER NOW!!</div> 
    </Col>
      </Row>
  </Carousel.Item>
</Carousel>
        </div>
        </div>
       
 <div style= {{marginBottom:"6%",marginTop:"3%",color:"#000000",textShadow:"2px 2px 2px #db1709",textAlign:"center",fontSize:"70px", fontWeight:"bolder",}}>Buy your Stickers Here!</div>   
          
        <Container style={{marginBottom:"3%"}}>

            <Row className='d-flex align-items-center justify-content-center' >

            {products.map((product)=>(
                <Col sm={12} md={6} xl={3} >
                    <ProductCard key = {product.id} prod = {product}></ProductCard>

                </Col>
            ))}
            </Row>

        </Container>
        </Container>  
        </div>
    )
}

export default Landingpage
