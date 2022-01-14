import React from 'react';
import aboutus from './Aboutus.png'; // Tell webpack this JS file uses this image

function Abpic() {
  return <img style = {{height:"700px", width:"1600px"}} src={aboutus} alt="YourDesign.Store" />;
}

export default Abpic;