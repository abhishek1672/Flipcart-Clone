import { Box, Typography,ThemeProvider } from '@mui/material'
import React from 'react'
import { navData } from '../../constants/data'
import styled from '@emotion/styled'

import { createTheme } from '@mui/material/styles';

const theme =createTheme();


const Component=styled(Box)(({theme})=>({
    display: 'flex',
    margin: '55px 120px 0 120px',
    justifyContent: 'space-between',
    overflow:'overlay',

    [theme.breakpoints.down('lg')]:{
        margin:0
    }
}));
       
    
const Container=styled(Box)`
            padding:8px 8px;
            text-align:center;`

const Text=styled(Typography)`
        font-size:14px;
        font-weight:600;
        font-family:inherit`;

const Navbar = () => {
    return (<>

        <ThemeProvider theme={theme}>
        <Box style={{background:'#fff'}}>
        <Component>
            {navData.map(data => {
                return (
                    <Container key={data.text}>
                        <img src={data.url} alt='nav' style={{width:68,alignItems:"center"}} />
                        <Text>{data.text}</Text>
                    </Container>
                )
            })}
        </Component>
            </Box>
        </ThemeProvider>
    </>
    )
}

export default Navbar







  