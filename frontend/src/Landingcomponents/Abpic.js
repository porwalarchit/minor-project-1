import React from 'react';
import aboutus from './Aboutus.png'; // Tell webpack this JS file uses this image

function Abpic() {
  return <img style = {{height:"70%", width:"100%"}} src={aboutus} alt="YourDesign.Store" />;
}

export default Abpic;