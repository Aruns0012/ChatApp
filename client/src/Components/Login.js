import React from 'react'
import "./login.css"
import { TextField, Button } from "@mui/material"

const Login = () => {
    return (
        <div className='login-container'>
            <div className="loginForm">
            <p>Login To Your Account</p>
            <TextField id="outlined-basic" label="Enter your Email" variant="outlined" />
            <TextField id="outlined-basic" label="Password" variant="outlined" />
            <Button variant="contained">Contained</Button>
            </div>

        </div>
    )
}

export default Login
