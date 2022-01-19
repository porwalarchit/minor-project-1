import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Row, Container, Col, ListGroup,Button } from 'react-bootstrap'

function ProductPage() {
    const { id } = useParams();
    // console.log(id);
    const [pro, setpro] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:2000/products/${id}`).then(async (response) => {
            await setpro(response.data);
        }).catch(err => { console.error(err); })
    }, [])
    return (
        <Container className="my-5">
            <Row >
                <Col>
                    <ListGroup>
                        <img style={{ width: "100%", }} src={pro.image} alt={pro.name} />
                    </ListGroup>
                </Col>
                <Col sm={12} md={6} xl={6}>
                    <ListGroup>
                        <ListGroup.Item><h1 style={{ fontSize: "350%" }}><b>{pro.name}</b></h1></ListGroup.Item>
                        <ListGroup.Item >
                        <Row>
                        <Col style={{height:"130px"}}>
                        <div className='d-flex flex-row'>
                            <div style={{ fontSize: "150%", fontWeight: "bold" }} className='mx-2'>Price: 
                            </div>
                            <div>
                                <p style={{ fontSize: "200%", color: "red" }}>₹{pro.price}</p>(Inclusive of Taxes)
                            </div>
                        </div>

                        <div className='mx-2 py-1' style={{ fontSize:"120%"}}><b>Count in Stocks:</b> {pro.countInStocks}</div>
                        <div className='mx-2 py-1' style={{ fontSize:"120%"}}><b>Category: </b>{pro.category}</div>
                        </Col>

                        <Col  style={{height:"130px"}} className='d-flex justify-content-center align-items-center '>
                        <button className=' btn btn-primary mt-5 px-4 py-2' style = {{fontSize:"130%"}}><b>ADD TO CART</b></button>
                        </Col>
                        </Row>
                        </ListGroup.Item>
                        <ListGroup.Item><div className='py-3' style={{ fontFamily: "serif", fontSize: "120%" }}>{pro.description}</div>
                        </ListGroup.Item>
                        <ListGroup.Item >
                                <b style={{fontSize:"100%"}}>ADDITIONAL INFORMATION: </b>
                                  <ul style={{listStyle:'circle',paddingBottom:"0%",paddingTop:"0%"}}>
                                   <li style={{color:"black",fontSize:"105%"}}> Matte Finished</li>
                                    <li style={{color:"black",fontSize:"105%"}}>Self Adhesive</li>
                                    <li style={{color:"black",fontSize:"105%"}}><b>Weight:</b> 0.05 g</li>
                                    <li style={{color:"black",fontSize:"105%"}}><b>Dimensions:</b> 6.35 × 6.35 × 1 cm</li>
                                   </ul>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductPage
