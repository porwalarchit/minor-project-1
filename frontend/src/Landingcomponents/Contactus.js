import React from "react";
import emailjs from "emailjs-com"

const Contactus = ()=>{
    const handleSubmit = (event) => {
        event.preventDefault();
        emailjs.sendForm('service_ba05nde','template_n358vgs',event.target,'user_XQZLfdP4na11L1AnqPxQG').then(res=>{console.log(res);}).catch(err=>{console.log(err);});
      }
    return(
        <div style = {{justifyContent : "center"}}>
            <h1>Contact us</h1>
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
<form  onSubmit={handleSubmit}  style={{marginLeft : "25px"}}>
 <label style={{marginRight:"100%",marginBottom:"2px"}}>Name</label>
 <input size = "50" name = "name" type="text" style = {{marginBottom:"8px",borderRadius:"2px",borderWidth:"1px"}}/>
 <label style={{marginRight:"100%",marginBottom:"2px"}}>Email</label>
 <input size = "50" name = "usermail" type="email" style = {{marginBottom:"8px",borderRadius:"2px",borderWidth:"1px"}}/>
 <label style={{marginRight:"100%",marginBottom:"2px"}}>Message</label>
 <textarea rows="9" cols="100" name = "message" maxLength= "800" placeholder="Type your message here ..." style={{marginRight:"100%",marginBottom:"5px",borderRadius:"2px",borderWidth:"1px"}}/>
    <button type = "submit"style={{padding : "8px", paddingLeft : "35px", paddingRight : "35px", backgroundColor:"rgb(37, 111, 248)"
   ,borderRadius: "5px",color:"white", marginBottom:"25px"}}>Send</button>
    </form>
  </div>
    )
}
export default Contactus;