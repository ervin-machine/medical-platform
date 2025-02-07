import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box"
import { Button, CardActionArea, CardActions } from '@mui/material';

import "./componentCss/Anamnesis.css"

export default function Recipe() {
  return (
    <Card sx={{ maxWidth: 1000 }}>
    
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Penecelen
          </Typography>
          <Typography variant="body2"  color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </CardContent>
     
      <Box display="flex" className="spaceBetween">
        <Typography sx={{ p: '2px 2px', m: '5px 15px'}} size="small" color="primary">
          5/14/2020
        </Typography>
        <Typography sx={{ p: '2px 2px', m: '5px 15px'}} size="small" color="primary">
          Dr. Samule L. Jackson
        </Typography>
      </Box>
    </Card>
  );
}
