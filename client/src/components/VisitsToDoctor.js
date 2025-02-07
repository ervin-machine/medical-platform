import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box"
import { Button, CardActionArea, CardActions } from '@mui/material';

import "./componentCss/Anamnesis.css"

export default function VisitsToDoctor({diagnosis}) {
  return (<>

{  diagnosis.map((diag) =>


<Card sx={{ maxWidth: 1000, m: '25px 5px' }}>   
<CardContent>
  <Typography gutterBottom variant="h5" component="div">
    {diag.dg_name}
  </Typography>
  <Typography variant="body2"  color="text.secondary">
  {diag.dg_desc}
  </Typography>
</CardContent>

<Box display="flex" className="spaceBetween">
<Typography sx={{ p: '2px 2px', m: '5px 15px'}} size="small" color="primary">
{diag.dg_date.substring(0,10)}
</Typography>
<Typography sx={{ p: '2px 2px', m: '5px 15px'}} size="small" color="primary">
{diag.doctor}
</Typography>
</Box>
</Card>


)}



  </>);
}
