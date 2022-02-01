import React,{useState} from 'react'
import "./MyAccounts.css"
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios';
import "./Background.css"
import NavBar from '../layoutcomponents/NavBar';


function MyAccount() {

  const [username,setUsername] = useState('') ;
  const [password,setPassword] = useState('') ;
  const [msg,setMsg] = useState('') ;
  let navigate = useNavigate() ; 

  const login = (e) => {

    e.preventDefault() ;

    const config = {
      username:username,
      password:password
    }


    axios.post("http://localhost:2000/login",config).then( async res=>{

      if(res.status === 200){
        await localStorage.setItem('jwtToken',res.data.jwt_token);
        navigate("/") ;
       }
       else if(res.status === 201)
       {
         setMsg('Invalid login credentials');
       }
       else
       {
        setMsg(res.data.message);
       }
      
    })

  }
  const handleSubmit = (event) => {
      event.preventDefault();
  }
    return (
      <div>
        <NavBar/>
      
        <div className='background'>
      <div className='field'>
          <h1 style = {{fontWeight:"bold"}}>LOGIN</h1>
    <form className="form" onSubmit={handleSubmit}>
  <div >
    <label>Username:</label>
    <input className= "input" type="text" name="first-name" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} />
  </div>
  <div>
    <label>Password:</label>
    <input className= "input" type="password" name="last-name" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} />
  </div>
  {msg.length===0?"":<div style={{color:"#fad6cd",marginLeft:"7%",fontSize:"110%"}}>{msg}</div>}
    <button className="button" type="submit" onClick={login} >Sign In</button>
  <Link to = "/createaccount" className="acc">Create Account</Link>
</form>
      </div>
        </div>
        </div>
    )
}

export default MyAccount
