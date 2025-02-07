import React, {useState, useEffect} from 'react'
import Axios  from "axios"
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import Grid from "@mui/material/Grid"
import List from "@mui/material/List"
import { ListItem } from '@mui/material';
import { ListItemText } from '@mui/material';
import "./componentCss/Appointment.css"

function Appointment({patientInfo, sessionData}) {

    const [timeSc, setTimeSc] = React.useState(new Date());
    const [appointments, setAppointments] = useState([])

    const [updateState, setUpdateState] = useState(true)

    Axios.defaults.withCredentials = true;

    const setAppointment = ()=>{
      let formatDate = ""
      formatDate += timeSc.getFullYear()+"/"
      formatDate += timeSc.getMonth()+"/"
      formatDate += timeSc.getDate()+" "
      formatDate += timeSc.getHours()+":"
      formatDate += timeSc.getMinutes();

      console.log(formatDate)
      console.log(patientInfo)

      Axios.post('http://localhost:3001/addAppointment', {
        jmbg: patientInfo.jmbg,
        dateSc: formatDate,
    }).then((response) => {
       setUpdateState(!updateState)
    })
     

    } 

    useEffect(() => {
      Axios.post(`http://localhost:3001/appointment`, {
        jmbg: patientInfo.jmbg
    }).then((response) => {
        console.log("listet diagnosis")
        console.log(response.data)
        setAppointments(response.data)
    })
    }, [patientInfo, updateState])


    return (
        <div>
        
     {sessionData.position=="doctor" &&       <Box>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        label="DateTimePicker"
        value={timeSc}
        onChange={(newValue) => {
          setTimeSc(newValue);
        }}
      />
    </LocalizationProvider>
    <Button onClick={setAppointment} className="btn" variant="contained">Add</Button>

    </Box>}


    <Grid item xs={12} md={6}>


<List  component="nav" aria-label="mailbox folders">
{appointments.map((ap) => (
  <ListItem>
  <ListItemText variant="outlined"
    primary= {ap.dateSc}
   />
</ListItem>
))}

</List>
  
</Grid>

        </div>
    )
}

export default Appointment
