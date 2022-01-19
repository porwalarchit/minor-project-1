import React from "react";
import emailjs from "emailjs-com"
import './Background.css'

const Contactus = ()=>{
    const handleSubmit = (event) => {
        event.preventDefault();
        emailjs.sendForm('service_ba05nde','template_n358vgs',event.target,'user_XQZLfdP4na11L1AnqPxQG').then(res=>{console.log(res);}).catch(err=>{console.log(err);});
      }
    return(
      <div className = "background" >
        <div className = "field" style = {{justifyContent : "center"}}>
            <h1 style = {{fontWeight:"bold"}}>Contact us</h1>
        <h3  style={{padding : "5px", paddingLeft : "25px"}}>We would love to hear your Queries/ Suggestions.</h3>
        <h6  style={{padding : "5px", paddingLeft : "25px"}}>** For any queries relating to the product Refund/ Cancellations, please email us directly at contact.stickitup@gmail.com along with your order id and reason for cancellation and we will revert back as soon as possible, or you can reach us at +91 9619545350
            <br/>
Important update: All orders placed will be delivered within 3-7 working days after the shipping email/ sms is sent to you.</h6>
  <br/>
<h3 style={{padding : "5px", paddingLeft : "25px"}}>GET IN TOUCH</h3>

<h6  style={{padding : "5px", paddingLeft : "25px"}}>+918989141982<br/>
vishunayak2001@gmail.com<br/>
London Rubber Company (India) Ltd. Pallavaram(Madras)<br/></h6><br/>
<h3 style={{padding : "5px", paddingLeft : "25px"}} >OR MAIL US</h3><br/>
<form onSubmit={handleSubmit}  style={{marginLeft : "25px"}}>
 <label style={{marginRight:"100%",marginBottom:"0.3%"}}>Name</label>
 <input size = "40" name = "name" type="text" style = {{marginBottom:"1%",borderRadius:"2px",borderWidth:"1px"}}/>
 <label style={{marginRight:"100%",marginBottom:"0.3%"}}>Email</label>
 <input size = "40" name = "usermail" type="email" style = {{marginBottom:"1%",borderRadius:"2px",borderWidth:"1px"}}/>
 <label style={{marginRight:"100%",marginBottom:"0.3%"}}>Message</label>
 <textarea rows="8" cols="60" name = "message" maxLength= "800" placeholder="Type your message here ..." style={{marginRight:"100%",marginBottom:"1%",borderRadius:"2px",borderWidth:"1px"}}/>
    <button type = "submit"style={{padding : "0.5%", paddingLeft : "1.5%", paddingRight : "1.5%", backgroundColor:"rgb(37, 111, 248)"
   ,borderRadius: "5px",color:"white", marginBottom:"25px"}}>Send</button>
    </form>
  </div>
  </div>
    )
}
export default Contactus;