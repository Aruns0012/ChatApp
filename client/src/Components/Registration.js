import React from 'react'
import "./login.css"
import { TextField, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'


const Registration = () => {
    const navigate = useNavigate();
    return (
        <div className="registration-container">
            <div className='main-container'>
                <p className='text loginText'>register instantly</p>
                <TextField id="outlined-basic" label="Name" variant="outlined" />
                <TextField id="outlined-basic" label="Email" variant="outlined" />
                <TextField id="outlined-basic" label="Password" variant="outlined" />
                <TextField id="outlined-basic" label="Confirm-password" variant="outlined" />
                <Button variant="contained">Register</Button>

                <p className='links' onClick={() => {
                    navigate("/")
                }}>already have your account?</p>
            </div>
        </div>
    )
}

export default Registration
