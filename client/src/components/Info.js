import React, {useState} from 'react'
import Axios  from "axios"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CardMedia from '@mui/material/CardMedia';
import Box from "@mui/material/Box"


import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';


import "./componentCss/Info.css";




function Info({setPatientInfo, patientInfo, sessionData}) {

  Axios.defaults.withCredentials = true;
    
  const [searchPatient, setSearchPatient] = useState("")

  const [jmbg, setJmbg] = useState(0)

  const [patientQueryResult, setPatientQueryResult] = useState({})

  const selectPatient = () => {
    setPatientInfo(patientQueryResult)
  }


  const search = ()=>{
    console.log("searching")
    Axios.post('http://localhost:3001/patient', {
        jmbg: jmbg
    }).then((response) => {
        console.log(response.data)
        setPatientQueryResult(response.data)
        //setLoginStatus(response.data.loggedIn)
        
    })
}
 

    function createData(info, res) {
        return { info, res};
      }

      const rows = [
        createData('First name', `${patientInfo.first_name}`),
        createData('Last Name', `${patientInfo.last_name}`),
        createData("Father's name", `${patientInfo.father_name}`),
        createData('JMBG', `${patientInfo.jmbg}`),
        createData('Phone Number', `${patientInfo.phone_number}`),
        createData('Adress',  `${patientInfo.adress}`),
        createData('Date of birth', `${patientInfo.birth}`),
        createData('Profession', `${patientInfo.profession}`),

      ];
      



    return (
     
        <div className='Info'>
    
             <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.info}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.info}
              </TableCell>
              <TableCell align="right">{row.res}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

{ sessionData.position=="doctor" && <Box className='patientSearchBox'>
    <Paper className="patientSearch"
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Patient"
        onChange={(e) => {setJmbg(e.target.value)}}
      />
      <IconButton onClick={search} sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>



   { patientQueryResult.first_name && <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableBody>
   
            <TableRow onClick={selectPatient}
              key={patientQueryResult.jmbg}
              aa={patientQueryResult.jmbg}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{patientQueryResult.first_name}</TableCell>
              <TableCell align="left">{patientQueryResult.last_name}</TableCell>
              <TableCell align="center">{patientQueryResult.father_name}</TableCell>
              <TableCell align="right">{patientQueryResult.jmbg}</TableCell>
            </TableRow>
          
        </TableBody>
      </Table>
    </TableContainer> }

  </Box>}
    
        </div>
    )
}

export default Info
