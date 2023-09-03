import React ,{useState}from 'react'
import "./login.css"
import { TextField, Button } from "@mui/material"
import { useNavigate } from 'react-router-dom'
import { endpoint } from '../App'
import axios from "axios"

const Login = () => {

    const [user, setUser] = useState({
        email: "",password: ""
      });


    const handleLogin = async()=>{
        let res = await axios.post(endpoint+"/login",user);
        console.log(res);
    }

    let name, value;

  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  }

  

    const navigate = useNavigate();
    return (
        <div className='registration-container'>
            <div className="main-container">
            <p className='loginText'>Login To Your Account</p>
            <div className="loginForm">

            <TextField 
            value={user.email} 
            onChange={handleChange} 
            name='email'  
            label="Enter your Email" 
            variant="outlined" />

            <TextField 
            value={user.password}
            onChange={handleChange} 
            name='password'  
            label="Password" 
            variant="outlined" />


            <Button variant="contained" onClick={handleLogin}>Login</Button>
            </div>
<p className="links" onClick={()=>{
    navigate("registration")
}}>don't have account ?</p>
</div>
        </div>
    )
}

export default Login
