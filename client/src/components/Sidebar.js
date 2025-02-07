import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Login from "./Login"

import Info from "./Info"
import Anamnesis from "./Anamnesis"
import Vaccination from "./Vaccination"
import Allergies from "./Allergies"
import Recipes from "./Recipes"
import Appointment from "./Appointment"
import Widgets from "./Widgets"
import Chat from "./Chat/Chat"
import VideoChat from "./VideoChat/VideoChat.js"
import {Link} from 'react-router-dom'
function Sidebar(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="Sidebar"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

Sidebar.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs({setPatientInfo, patientInfo, sessionData}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: window.innerHeight - 60
    }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Info" {...a11yProps(0)} />
        <Tab label="Anamnesis" {...a11yProps(1)} />
        <Tab label="Vaccination" {...a11yProps(2)} />
        <Tab label="Allergies" {...a11yProps(3)} />
        <Tab label="Recipes" {...a11yProps(4)} />
        <Tab label="Appointment" {...a11yProps(5)} />
        <Tab label="Widgets" {...a11yProps(6)} />
        <Tab label="Chat" {...a11yProps(7)} />
        <Link to="/video"><Tab label="VideoChat" {...a11yProps(8)} /></Link>
      </Tabs>
      <Sidebar value={value} index={0}>
        <Info setPatientInfo = {setPatientInfo} patientInfo = {patientInfo} sessionData={sessionData} />
      </Sidebar> 
      <Sidebar value={value} index={1}>
        <Anamnesis sessionData={sessionData} patientInfo={patientInfo} />
      </Sidebar>
      <Sidebar value={value} index={2}>
        <Vaccination/>
      </Sidebar>
      <Sidebar value={value} index={3}>
        <Allergies/>
      </Sidebar>
      <Sidebar value={value} index={4}>
        <Recipes/>
      </Sidebar>
      <Sidebar value={value} index={5}>
        <Appointment patientInfo={patientInfo} sessionData={sessionData} />
      </Sidebar>
      <Sidebar value={value} index={6}>
        <Widgets/>
      </Sidebar>
      <Sidebar value={value} index={7}>
        <Chat />
      </Sidebar>
    </Box>
  );
}
