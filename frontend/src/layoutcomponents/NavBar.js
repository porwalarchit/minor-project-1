import {  faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"
import {Navbar,Nav,Container,NavDropdown} from "react-bootstrap";
import logo from './logo.jpeg';
import Header from './Header'

function NavBar() {

    return (
        <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home"><Link to = "/"><Header/></Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features"><Link to="/reviews" className = "link" style = {{textDecoration:"none"}}>Reviews</Link></Nav.Link>
      <Nav.Link href="#pricing">Filter</Nav.Link>
    </Nav>
    <form>
        <input style={{padding:"4px",paddingLeft:"5px",paddingRight:"190px"}} placeholder="search"/>
        </form>
    <Nav>
      <Nav.Link className = "link"><a ><FontAwesomeIcon className = "icon" icon = {faSearch}/></a>
      </Nav.Link>
      <Nav.Link>
                      <Link to="/myaccount" className = "link"><FontAwesomeIcon  icon= {faUser} /></Link>
      </Nav.Link>
      <Nav.Link>
                      <Link to="/Cart" className = "link"><FontAwesomeIcon icon= {faShoppingCart} /></Link>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
            </div>
    )
}

export default NavBar;
