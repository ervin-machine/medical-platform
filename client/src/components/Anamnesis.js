import React, {useState, useEffect} from 'react'
import Axios  from "axios"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';

import "./componentCss/Info.css"
import VisitsToDoctor from "./VisitsToDoctor"
function Anamnesis({sessionData, patientInfo}) {

  Axios.defaults.withCredentials = true;

  const [dgName, setDgName] = useState("")
  const [dgDesc, setDgDesc] = useState("")

  const [diagnosis, setDiagnosis] = useState([])

  const addDiagnosis = ()=>{
    console.log("Adding")
    Axios.post('http://localhost:3001/addDiagnosis', {
        jmbg: patientInfo.jmbg,
        dg_name: dgName,
        dg_desc: dgDesc,
        doctor: sessionData.username
    }).then((response) => {
       
    })


}


useEffect(() => {
  Axios.post(`http://localhost:3001/diagnosis`, {
    jmbg: patientInfo.jmbg
}).then((response) => {
    console.log("listet diagnosis")
    console.log(response.data)
    setDiagnosis(response.data)
})
},[ patientInfo])


    return (
        <div>
        
{sessionData.position=="doctor" && <Box className="addAnamnesis" component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField onChange={(e)=>{
        setDgName(e.target.value)
      }} id="standard-basic" label="Diganosis" variant="standard" />


      <TextareaAutosize
      minRows={3}
      variant="standard"
      placeholder="Description"
      style={{ width: 1000 }}
      onChange={(e)=>{
        setDgDesc(e.target.value)
      }}
    />

<Button onClick={addDiagnosis } variant="contained">Add</Button>


    </Box>}

            {patientInfo.first_name != "" && <  VisitsToDoctor diagnosis={diagnosis} setDiagnosis={setDiagnosis} />}
        </div>
    )
}

export default Anamnesis
