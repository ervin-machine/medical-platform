
import React, {useState, useEffect} from "react"
import Axios  from "axios"
import ReactDOM from 'react-dom';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { formGroupClasses } from "@mui/material";
import Button from "@mui/material/Button"

import "./componentCss/Signup.css"

function Login({setLoginStatus, setSessionData, sessionData}) {

    const [usernameLog, setUsernameLog] = useState("")
    const [passwordLog, setPasswordLog] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    Axios.defaults.withCredentials = true;
    
    const login = ()=>{
        console.log("sending")
        Axios.post('http://localhost:3001/login', {
            username: usernameLog,
            password: passwordLog
        }).then((response) => {
            console.log(response.data.result)
            setLoginStatus(response.data.loggedIn)
            
            setSessionData(response.data.result)

            
        })
    }

    return (
        <div>
         
                <h1 className='header'>Login</h1>

                <Box className='signup' sx={{ '& button': { m: 1 } }}>
<FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
<TextField
required
id="demo-helper-text-misaligned"
label="Name"
onChange={(e) => {setUsernameLog(e.target.value)}}

/>
</FormControl>
<FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">

       <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
       <OutlinedInput
       required
         id="outlined-adornment-password"
         type={showPassword ? 'text' : 'password'}
       
         onChange={(e)=>{ setPasswordLog(e.target.value) }}
         endAdornment={
           <InputAdornment position="end">
             <IconButton
               aria-label="toggle password visibility"
               onClick={()=>{setShowPassword(!showPassword)}}
               
               edge="end"
             >
               {showPassword ? <VisibilityOff /> : <Visibility />}
             </IconButton>
           </InputAdornment>
         }
         label="Password"
       />
     </FormControl>
     <Button onClick={ login } sx={{ m: 1, width: '38ch' }} variant="contained" size="large">
          Login
        </Button>
        </Box>
        </div>
    )
}

export default Login