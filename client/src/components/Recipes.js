import React from 'react'
import { TextareaAutosize } from '@mui/base'
import { Button } from '@mui/material'
import { Box } from '@mui/system'
import { TextField } from '@mui/material'

import Recipe from "./Recipe"

function Recipes() {
    return (
        <div>
           <Box className="addAnamnesis" component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Diganosis" variant="standard" />


      <TextareaAutosize

      minRows={3}
      variant="standard"
      placeholder="Description"
      style={{ width: 1000 }}
    />

<Button variant="contained">Add</Button>

</Box>

<Recipe/>


        </div>


    )
}

export default Recipes
