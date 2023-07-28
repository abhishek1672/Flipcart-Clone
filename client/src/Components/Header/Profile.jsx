import React, { useState } from 'react'
import { Box,Typography,Menu,MenuItem } from '@mui/material'
import styled from '@emotion/styled';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Component=styled(Menu)`
    margin-top:5px;`

const Logout=styled(Typography)`
    font-size:12px;
    margin-left:18px;`;

const Profile = ({account,setAccount}) => {

    const [open,setOpen]=useState(false);

    const handleClick=(event)=>{
        setOpen(event.currentTarget);
    }

    const handleClose=()=>
    {
        setOpen(false);
    }

    const logout=()=>{
      setAccount('');
    }

  return (
    <>
      <Box onClick={handleClick} style={{ paddingLeft: 6,cursor:'pointer'}}><Typography  style={{marginTop:4, paddingLeft:3}}>{account}</Typography></Box>

      {/* //Menu */}
      <Component
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        
      >
        <MenuItem onClick={()=>{handleClose();logout();}}>
          <PowerSettingsNewIcon color="primary" fontSize='small'/>
          <Typography>Logout</Typography>
        </MenuItem>
        
      </Component>

      </>
  )
}

export default Profile