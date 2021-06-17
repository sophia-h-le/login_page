import './App.css';
import React, { useState } from 'react';

const App = () => {
  const [ loginInfo, setLoginInfo ] = useState([])
  
  const checkLoginInfo = (event) => {
    event.preventDefault()
    console.log('Log In button clicked', event.target)
    const loginInfoObject = {
      username: newUsername,
      password: newPassword
      // hashed 
      // dateTime: currentDateTime
    }
    console.log(JSON.stringify(loginInfoObject))
    // success message

    setNewUsername('')
    setNewPassword('')
}

  const [ newUsername, setNewUsername ] = useState('')
  const handleUsernameChange = (event) => {
    console.log(event.target.value)
    setNewUsername(event.target.value)
  }

  const [ newPassword, setNewPassword ] = useState('')
  const handlePasswordChange = (event) => {
    console.log(event.target.value)
    setNewPassword(event.target.value)
  }

  return (
    <div>
      <h4>Login</h4>
      <div>Welcome back!</div>
      <form 
        name='loginForm'
        onSubmit={checkLoginInfo}>
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
            value={newPassword}
            onChange={handlePasswordChange}
            required>
          </input>
        </div>
        <br/>
        <div>
        <button 
          type='submit' 
          value='submit' 
          // disabled={!formValid}
          >
            Submit
          </button>
        </div>
      </form>
      <div>Reset password</div>
    </div>
  );
}

export default App;
