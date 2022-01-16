import React,{useState} from 'react'
import "./MyAccounts.css"
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios';
import "./Background.css"

function MyAccount() {

  const [username,setUsername] = useState('') ;
  const [password,setPassword] = useState('') ;
  let navigate = useNavigate() ; 

  const login = (e) => {

    e.preventDefault() ;

    const config = {
      username:username,
      password:password
    }

    console.log(config)

    axios.post("http://localhost:2000/login",config).then(res=>{
      console.log(res) ;

      if(res.status === 201){
        navigate("/") ;
      }

    })

  }

  const handleSubmit = (event) => {
      event.preventDefault();
    }
    return (
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

    <button className="button" type="submit" onClick={login} >Sign In</button>
  <Link to = "/createaccount" className="acc">Create Account</Link>
</form>
      </div>
        </div>
    )
}

export default MyAccount
