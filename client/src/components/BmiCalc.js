import React, {useState, useEffect} from 'react'
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
import Label from "@mui/material/FormLabel"
import Button from "@mui/material/Button"




function BmiCalc() {

    const [mass, setMass] = useState(0)
    const [height, setHeight] = useState(0)
    const [bmi, setBmi] = useState(0)
    const [category, setCategory] = useState("unknown")

    const calc = ()=>{
        const b = mass/(height*height)
        setBmi(b)
        if(b < 18.5) setCategory("Underweight")
        if(b >= 18.5 && b <25) setCategory("Normal Range")
        if(b >= 25 && b <30) setCategory("Overweight")
        if(b >= 30) setCategory("Obese")
    }

    return (
        <div>
            <h1>BMI Calculator</h1>
      <FormControl>
          <Label>Mass</Label>
          <OutlinedInput
            id="outlined-adornment-weight"
            onChange={(e)=>{
                setMass(e.target.value)
            }}
            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          <Label>Height</Label>
          <OutlinedInput
            id="outlined-adornment-weight"
            onChange={(e)=>{
                setHeight(e.target.value/100)
            }}
            endAdornment={<InputAdornment position="end">cm</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
           <Label>.</Label>
          <Button onClick={calc} variant="contained">Calculate</Button>
          <p>BMI: {bmi}</p>
          <p>Category: {category} </p>
         </FormControl>
        </div>
    )
}

export default BmiCalc
