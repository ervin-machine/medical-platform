
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

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import "./componentCss/Signup.css"

function Signup() {

    const [usernameSign, setUsernameSign] = useState("")
    const [passwordSign, setPasswordSign] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [position, setPosition] = useState("patient")
    const [jmbg, setJmbg] = useState(0)
    const [token, setToken] = useState("")

    Axios.defaults.withCredentials = true;
    
    const register = ()=>{
        Axios.post('http://localhost:3001/register', {
            username: usernameSign,
            password: passwordSign,
            position: position,
            jmbg: jmbg,
            token: token
        }).then((response) => {
            console.log(response)
        })
    }

    return (
        <div>
                <h1 className="header">Register</h1>

                <Box className="signup" sx={{ '& button': { m: 1 } }}>
<FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
<TextField
required
id="demo-helper-text-misaligned"
label="Name"
onChange={(e) => {setUsernameSign(e.target.value)}}

/>
</FormControl>
<FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">

       <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
       <OutlinedInput
       required
         id="outlined-adornment-password"
         type={showPassword ? 'text' : 'password'}
       
         onChange={(e)=>{ setPasswordSign(e.target.value) }}
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

     <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
     <InputLabel id="demo-simple-select-label">Position</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={position}
          label="Position"
          onChange={(e)=>{
            setPosition(e.target.value)
          }}
        >
          <MenuItem value={"patient"}>Patient</MenuItem>
          <MenuItem value={"doctor"}>Doctor</MenuItem>
          <MenuItem value={"pharmacist"}>Pharmacist</MenuItem>
        </Select>
        </FormControl>


<FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
<TextField
required
id="demo-helper-text-misaligned"
label="JMBG"
onChange={(e) => {setJmbg(e.target.value)}}

/>
</FormControl>


<FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
<TextField
required
id="demo-helper-text-misaligned"
label="Token"
onChange={(e) => {setToken(e.target.value)}}

/>
</FormControl>


     <Button onClick={register} variant="contained" sx={{ m: 1, width: '38ch' }} size="large">
          Sign Up
        </Button>
        </Box>






        </div>
    )
}

export default Signup
