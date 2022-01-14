import React from 'react';
import logo from './logo.jpeg'; // Tell webpack this JS file uses this image

function Header() {
  return <img style = {{height:"100px", width:"200px"}} src={logo} alt="YourDesign.Store" />;
}

export default Header;