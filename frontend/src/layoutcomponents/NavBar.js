import {  faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"
import {Navbar,Nav,Container,NavDropdown, Row, Col} from "react-bootstrap";
import Header from './Header'
import axios from 'axios'

function NavBar() {
  const [name, setName] = useState('Guest')
  
  const getUserDetail = ()=>{
    const config = {
      headers: {
        authorization: localStorage.getItem('jwtToken'),
      },
    };
    axios.get("http://localhost:2000/getuserdetails",config).then(async (res) => {
      setName(res.data.firstname);}
      ).catch((err)=>{console.error(err);})
  }
  getUserDetail();
    return (
        <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container >
  <Navbar.Brand  href="#home"><Link to = "/" ><Header /></Link></Navbar.Brand>
   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav"> 
    {/* <Nav className="me-auto">
      <Nav.Link href="#features"><Link to="/reviews" className = "link" style = {{textDecoration:"none"}}>Reviews</Link></Nav.Link>
      <Nav.Link href="#pricing">Filter</Nav.Link>
    </Nav> */}
    {/* <form>
        <input style={{padding:"4px",paddingLeft:"5px",paddingRight:"190px"}} placeholder="search"/>
        </form> */}

    <Nav className="justify-content-end flex-grow-1 pe-3">
      {/* <Nav.Link className = "link"><a ><FontAwesomeIcon className = "icon" icon = {faSearch}/></a>
      </Nav.Link> */}
      <Nav.Link className='flex-row d-flex '>
            <div className = "px-2">Welcome {name} </div> 
            <Link to="/myaccount" className = "link px-2"><FontAwesomeIcon style={{fontSize:"145%"}}  icon= {faUser} /></Link>
            <Link to="/Cart" className = "link px-2"><FontAwesomeIcon style={{fontSize:"145%"}} icon= {faShoppingCart} /></Link>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
            </div>
    )
}

export default NavBar;
