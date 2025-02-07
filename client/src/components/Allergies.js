import React, {useState} from 'react'
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
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid"
import List from "@mui/material/List"
import { ListItem } from '@mui/material';
import { ListItemText } from '@mui/material';


function Allergies() {



      const [patientAllergies, setPatientAllergies] = useState([{
        name: "Polio",
        jmbg: "123231"
      },
      {
          name: "Polio",
          jmbg: "534254"
        }])

    return (
        <div>



<Box className="addAnamnesis" component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Allergie" variant="standard" />

<Button variant="contained">Add</Button>


    </Box>


    <Grid item xs={12} md={6}>

        <List>

      {patientAllergies.map((al) => (
          <ListItem>
          <ListItemText variant="outlined"
            primary= {al.name}
           />
        </ListItem>
      ))}

        </List>
          
        </Grid>


        </div>
    )
}

export default Allergies
