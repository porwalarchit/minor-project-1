import React, {useEffect, useState} from 'react'
import backgroundImage from './backgroundimage.jpg'
import axios from 'axios';
import  { Row,Col, Container } from 'react-bootstrap';
import ProductCard from './ProductCard';
import './Landingpage.css'

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
     <div>  
         <div style={{backgroundImage: `url(${backgroundImage})`, paddingTop:"50px",paddingBottom:"40px"}}>
        <div className='field' >
 <div style= {{color:"#e8e8e3",textShadow:"2px 2px 1px #00a835",textAlign:"center",fontSize:"45px", fontWeight:"bolder"}}>Create Your Own Custom</div>
 <div style= {{color:"#485254",textShadow:"2px 2px 1px #00beed",textAlign:"center",fontSize:"70px", fontWeight:"bolder",}}>Stickers</div>   
        </div>
        </div>
        <div style= {{padding:"20px",color:"#e8e8e3",textShadow:"2px 2px 1px #00a835",fontSize:"55px", fontWeight:"bolder"}}>
            Design your own sticker
            </div>
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
