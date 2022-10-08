import React from 'react'
import { Box, TextField } from '@mui/material';

const Field = ({label,type}) => {
  return (
    <Box
    component="form"
    sx={{
      "& .MuiTextField-root": { m: 1, width: "98%" },
    }}
    noValidate
    autoComplete="off"
  >
    <div>
      <TextField type={type} fullWidth label={label} id="fullWidth" />
    </div>
  </Box>
  )
}

export default Field