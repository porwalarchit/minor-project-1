import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Landingpage.css'

function CartProd({prod}) {
    const [msg,setMsg]=useState('');
    const deletefromcart=()=>{
        const config = {
            headers: {
              authorization: localStorage.getItem('jwtToken'),
            },
        }
        axios.delete(`http://localhost:2000/user/cart/delete/${prod._id}`,config).then(
            res=>{console.log(res);
            setMsg(res.data.message)
            window.location.reload(false);
        }
        ).catch(err=>console.error(err))
    }
    return (
        <div>
            {msg.length===0?'':<div style={{fontSize:"200%"}}>{msg}</div>}
            <Row className= "border rounded" style = {{height:"100%",width:"100%",backgroundColor:"#ede9df",marginBottom:"1%"}}>
                <Col  md={2} sm = {2} style = {{height:"150px"}}>
                <Link to={`/product/${prod._id}`} style = {{textDecorationLine:"none"}}>
                <img style = {{height:"100%"}} src={prod.image} alt={prod.name}/>
                </Link>
                </Col>
                <Col  md={8} sm = {8} style = {{ color:"black"}}>
                <h1 style = {{fontSize:"300%"}}>{prod.name}</h1>
                </Col>
                <Col md={2} sm = {2} style={{marginTop:"0%", color:"black"}}>
                <button onClick={deletefromcart} style={{marginLeft:"93%",marginBottom:"20%",border:"1px"}}><b><b>X</b></b></button>
                <h3 style = {{fontSize:"170%"}}>Price: <b>₹{prod.price}</b></h3>
                </Col>
            </Row>
            
        </div>
    )
}

export default CartProd
