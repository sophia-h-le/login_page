import React, { useState } from 'react';

const LoginForm = () => {
    const [formState , setFormState] = useState({
        username : "",
        password : ""
    })
    const handleFormChange = (event) => {
        const {id , value} = event.target   
        setFormState(prevFormState => ({
            ...prevFormState,
            [id] : value
        }))
        console.log('new formState', JSON.stringify(formState))
    }

    const handleLoginFormSubmit = (event) => {
        event.preventDefault()
        console.log('Log In button clicked', event.target)
        const loginInfoObject = {
          username: formState.username,
          password: formState.password
          // dateTime: currentDateTime
        }
        console.log(JSON.stringify(loginInfoObject))
        // success message  
    }

    return (
        <>
            <form 
            name='loginForm'
            onSubmit={handleLoginFormSubmit}>
                <br/>
                <div>
                    <label htmlFor="Username">Username</label>
                    <input 
                        id='username' 
                        placeholder='Username' 
                        value={formState.username}
                        onChange={handleFormChange}
                        required
                    />
                </div>
                <br/>
                <div>
                    <label htmlFor="Password">Password</label>
                    <input 
                        id='password' 
                        placeholder='Password' 
                        value={formState.password}
                        onChange={handleFormChange}
                        required
                    />
                </div>
                <br/>
                <div>
                    <button 
                        type='submit' 
                        value='submit'
                        // onClick={handleSubmitClick}
                        // disabled={!formValid}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </>
    )
}

export default LoginForm;
