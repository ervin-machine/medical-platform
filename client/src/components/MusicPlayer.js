import * as React from 'react';
import {useState, useEffect} from "react"
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ReactAudioPlayer from 'react-audio-player';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';





const musicList = ["music 1111111111111", "muisc 2"]




export default function MusicPlayer() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
      <div>
<ReactAudioPlayer
  src="componentCss/ambient.mp3"
  autoPlay
  controls
/>


    <Box sx={{ maxWidth: 380, bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Relax" />
        <Tab label="Sleep" />
        <Tab label="Rest" />
        <Tab label="Study" />
        <Tab label="Meditite" />
        <Tab label="Item Six" />
        <Tab label="Item Seven" />
        <Tab label="Item Seven" />
      </Tabs>

      <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Relax
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Music For Relaxation
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://cdn.shopify.com/s/files/1/0513/2271/6369/products/chill_magenta_sunset_110x110@2x.jpg?v=1622476204"
        alt=""
      />
    </Card>

    </Box>


    </div>
  );
  
}
