import './App.css';
import React, { useState } from 'react';

const App = () => {
  const [ loginInfo, setLoginInfo ] = useState([])
  
  const checkLoginInfo = (event) => {
    event.preventDefault()
    console.log('Log In button clicked', event.target)
    const loginInfoObject = {
      username: newUsername,
      // password: newPassword,
      // hashed 
      // dateTime: currentDateTime
    }
    console.log(JSON.stringify(loginInfoObject))
    // success message
}

  const [ newUsername, setNewUsername ] = useState('')
  const handleUsernameChange = (event) => {
    console.log(event.target.value)
    setNewUsername(event.target.value)
  }

  return (
    <div>
      <h4>Login</h4>
      <div>Welcome back!</div>
      <form>
        <br/>
        <div>
          Username <input 
            name='username' 
            placeholder='Username' 
            value={newUsername}
            onChange={handleUsernameChange}
            required>
          </input>
        </div>
        <br/>
        <div>
          Password <input 
            name='password' 
            placeholder='Password' 
            required>
          </input>
        </div>
        <br/>
      </form>
      <div>Reset password</div>
    </div>
  );
}

export default App;
