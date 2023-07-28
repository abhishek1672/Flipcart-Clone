import { Box, Button, Typography, ThemeProvider, Badge } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { useContext, useState } from 'react'
import styled from '@emotion/styled';
import { DataContext } from '../../context/DataProvider';
import Profile from './Profile';
import { createTheme } from '@mui/material/styles';
import {Link} from "react-router-dom"
import { UseSelector, useSelector } from 'react-redux';

//components
//login dialog

import LoginDialog from '../login/LoginDialog';

const theme = createTheme();

const Wrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent:'space-between',
    margin: '0 0 0 auto',
    '& >*': {
    marginRight: '38px !important',
    fontSize: 16,
    alignItems: 'center'
    },
    [theme.breakpoints.down('md')]: {
      display: 'block'
    },

  }))





const Container = styled(Link)(({ theme }) => ({
  display: 'flex',
  textDecoration:'none',
  color:'inherit',
  marginTop: '4px',
  [theme.breakpoints.down('md')]: {
    display: 'block'
  }

}))


const LoginButton = styled(Button)`
      color:#2874f0;
      font-size:20px;
      background:#fff;
      text-transform:none;
      margin-left:38px;
      width:120px;
      height:30px;
      font-weight:600;
      border-radius:0px;
      box-shadow:none;
      `



const CustomeButtons = () => {

  const [open, setOpen] = useState(false);

  const { account, setAccount } = useContext(DataContext);

  const {cartItems}=useSelector((state) => state.cart);


  const OpenDialog = () => {
    setOpen(true)
  }

  return (
    <>

      <ThemeProvider theme={theme}>
        <Wrapper>
          {
            account ? <Profile account={account} setAccount={setAccount} /> :
              <LoginButton variant='contained' onClick={() => OpenDialog()}>Login</LoginButton>


          }

          <Typography style={{ marginTop: 4, width: 125 }}>Become a Seller</Typography>
          <Typography style={{ marginTop: 4, }}>More</Typography>

          <Container to="/cart">
          <Badge badgeContent={cartItems?.length} color='secondary'>
            <ShoppingCartIcon />
          </Badge>

            <Typography style={{marginLeft:10}}>Cart</Typography>
          </Container>

          <LoginDialog open={open} setOpen={setOpen} />
        </Wrapper>
      </ThemeProvider>
    </>
  )
}

export default CustomeButtons