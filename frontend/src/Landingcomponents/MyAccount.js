import React from 'react'
import "./MyAccounts.css"
import {Link} from 'react-router-dom'

function MyAccount() {
  const handleSubmit = (event) => {
      event.preventDefault();
    }
    return (
        <div>
      <div>
          <h1>LOGIN</h1>
    <form className="form" onSubmit={handleSubmit}>
  <div >
    <label>Username:</label>
    <input className= "input" type="text" name="first-name" placeholder="Username"/>
  </div>
  <div>
    <label>Password:</label>
    <input className= "input" type="password" name="last-name" placeholder="Password"/>
  </div>

    <button className="button" type="submit">Sign In</button>
  <Link to = "/createaccount" className="acc">Create Account</Link>
</form>
      </div>
        </div>
    )
}

export default MyAccount
