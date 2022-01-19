import React from 'react';
import logo from './logo.jpeg'; // Tell webpack this JS file uses this image

function Header() {
  return (<img style = {{width:"25%",margin:"0%",padding:"0%"}} src={logo} alt="YourDesign.Store" />);
}

export default Header;