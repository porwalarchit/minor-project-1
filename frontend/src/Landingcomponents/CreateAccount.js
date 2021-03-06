import React from 'react'
import { useState } from 'react';
import {Form,Row,Col,Button,InputGroup, Container} from "react-bootstrap";
import "./CreateAccount.css"
import {Link} from "react-router-dom"
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import NavBar from '../layoutcomponents/NavBar';

function CreateAccount() {

  // const [validated, setValidated] = useState(false);

  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

  //   setValidated(true);
  // };

  let navigate = useNavigate() ;

  const [firstName,setFirstName] = useState('') ;
  const [lastName,setLastName] = useState("") ;
  const [userName,setUserName] = useState("") ;
  const [email,setEmail] = useState("") ;
  const [password,setPassword] = useState("") ;
  const [conPass,setConPass] = useState("") ;
  const [msg,setMsg] = useState('') ;

  const signup = (e) => {
    e.preventDefault() ; 

    const config = { 
      firstname:firstName,
      lastname:lastName,
      username:userName,
      email:email,
      password:password,
      confirmpassword:conPass
    }

    console.log(config)

    axios.post("http://localhost:2000/register",config).then( async res=>{

      console.log(res) ;

      if(res.status === 200){
        await localStorage.setItem('jwtToken',res.data.jwt_token);
        navigate("/") ;
       }
       else if(res.status === 300)
       {
         setMsg(res.data.message);
       }
       else if(res.status === 210)
       {
        setMsg(res.data.msg);
       }
       else
       {
         setMsg("Internal Error Occurred");
       }
    })


  }

  return (
    <div>
      <NavBar/>
    
      <div className='background'>
        <div className='field'>
        <h1 style = {{fontWeight:"bold"}}>CREATE ACCOUNT</h1>
    <Form className="wrap justify-content-center align-items-center " noValidate >
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e)=>setFirstName(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e)=>setLastName(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup  hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
              value={userName}
              onChange={(e)=> setUserName(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Email</Form.Label>
          <Form.Control type="Email" placeholder="Email" required value={email} onChange={(e)=>setEmail(e.target.value)} />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Email.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required value={password} onChange={(e)=>setPassword(e.target.value)} />
          <Form.Control.Feedback type="invalid">
            Please provide a password.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required value={conPass} onChange={(e)=>setConPass(e.target.value)} />
          <Form.Control.Feedback type="invalid">
            Please confirm your password.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
        <div style={{color:"#fc4103",fontSize:"140%"}}> {msg.length ==0?'':msg}</div>
      </Form.Group>
      <Button className = "btn" type="submit" onClick={signup} >Submit</Button>
      <Link style={{color:"aliceblue"}}className = "btn" to = "/myaccount">Sign In</Link>
    </Form>
    </div>
    </div>
    </div>
  );
}

export default CreateAccount