import { useState } from 'react';
import styled from '@emotion/styled'
import { Box, Button, ThemeProvider } from '@mui/material'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { createTheme, breakpoints } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {addToCart}  from "../../redux/actions/cartAction"
import { payUsingPaytm } from '../../service/api';
import {post} from "../../utils/paytm"


const theme=createTheme();


const LeftContainer = styled(Box)(({theme})=>({
    minWidth:' 40 %',
    padding:'40px 0 0 80px',
   [theme.breakpoints.down('lg')]:{
    padding:'20px 40px',
   },
}));
       

const Image = styled('img')({
        padding:'15px',
        width: '95%'
    });

const StyledButton=styled(Button)(({theme})=>({

    width: '48%',
    height: 50,
    borderRadius: 2,
    [theme.breakpoints.down('lg')]: {
        width:'46%',
    },
    [theme.breakpoints.down('sm')]: {
        width:'48%',
    },
    
}))
       

const ActionItem = ({ product }) => {

    const navigate=useNavigate();
    const dispatch=useDispatch();
    const {id}=product;

    const [quantity,setQuantity]=useState(1);

    const addItemToCart=()=>{
        dispatch(addToCart(id,quantity));
        navigate('/cart');
    }

    // Paytm function 
    const buyNow = async() => {
        let response =await payUsingPaytm({amount:500,email:"abhinalawade167@gmail.com"});
        let information ={
            action:'https://securegw-stage.paytm.in/order/process' ,
            params:response,
        }
        post(information);
    }


    return (
    
        <ThemeProvider theme={theme}>
        <LeftContainer>
            <Box style={{padding: '15px 20px',border: '1px solid #f0f0f0',marginRight:5}}> 
                <Image src={product.detailUrl} alt='product' />
            </Box>
           
            
            <StyledButton onClick={()=> addItemToCart()} variant="contained" style={{ marginRight: 10, background: '#ff9f00' }}><ShoppingCartIcon/>Add to Cart</StyledButton>
            <StyledButton variant="contained" style={{ background: '#fb541b' }} onClick={()=>buyNow()}><FlashOnIcon/>Buy Now</StyledButton>

        </LeftContainer>
        </ThemeProvider>
    )
}

export default ActionItem