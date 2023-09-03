import React from 'react'
import "./login.css"
import { TextField, Button } from "@mui/material"
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    return (
        <div className='login-container'>
            <p className='loginText'>Login To Your Account</p>
            <div className="loginForm">
            <TextField id="outlined-basic" label="Enter your Email" variant="outlined" />
            <TextField id="outlined-basic" label="Password" variant="outlined" />
            <Button variant="contained" onClick={()=>{navigate("app/welcome")}}>Contained</Button>
            </div>

        </div>
    )
}

export default Login
