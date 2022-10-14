import React from 'react'
import { Box, TextField } from '@mui/material';

const Field = ({label,type, onChange, value}) => {
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
      <TextField value={value} type={type} fullWidth label={label} onChange={onChange} id="fullWidth" />
    </div>
  </Box>
  )
}

export default Field