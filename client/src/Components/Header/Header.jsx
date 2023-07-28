import styled from '@emotion/styled'
import { AppBar, Box, Toolbar, Typography, ThemeProvider,IconButton,Drawer, List, ListItem } from '@mui/material'
import React, { useState } from 'react'
import Search from './Search';
import CustomeButtons from './CustomeButtons';
import { Link } from 'react-router-dom';
import { createTheme } from '@mui/material/styles'
import MenuIcon from '@mui/icons-material/Menu';

const theme = createTheme();


const StyledHeader = styled(AppBar)`
            background:#2874f0;
            height:55px;`;

const Component = styled(Link)`
        margin-left:12%;
        line-height:0;
        text-decoration:none;
        color:inherit;`


const SubHeading = styled(Typography)`

        font-size:12px;
        font-style:italic;`

const PlusImg = styled("img")(
  {
    width: 10,
    height: 10,
    marginLeft: 4
  }
);

const CustomeButtonWrapper = styled(Box)(({ theme }) => ({
    margin: '0 5% 0 auto',
    [theme.breakpoints.down('md')]:{
      display:'none',
    }

}))


const MenuButton=styled(IconButton)(({theme})=>({
      display:'none',
      [theme.breakpoints.down('md')]:{
        display:'block',
        
      }
}))



const Header = () => {

  const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';

  const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

  const [open,setOpen]=useState(false);



  const handleOpen=()=>{
    setOpen(true);
  }

  const handleClose=()=>{
    setOpen(false);
  };


  const list = () => (
    <Box style={{width:'200px'}} >
      <List>
        <ListItem button>
          <CustomeButtons />
        </ListItem>
      </List>
    </Box>
  );
  return (<>
    <ThemeProvider theme={theme}>
      <StyledHeader>
        <Toolbar style={{ minHeight: 55 }}>

        {/* Menu Hamburger */}
          <MenuButton color='inherit' onClick={handleOpen}>
            <MenuIcon />
          </MenuButton>

          <Drawer open={open} onClose={handleClose} >
            {list()}
          </Drawer> 
          {/* ----- */}
          <Component to="/">
            <img src={logoURL} alt="logo" style={{ width: 75 }} />
            <Box style={{ display: "flex" }}>
              <SubHeading>
                Explore&nbsp;
                <Box component="span" style
                  ={{ color: "#FFE500" }}>Plus</Box>
              </SubHeading>
              <PlusImg src={subURL} alt="sublogo" />
            </Box>
          </Component>
          <Search />

          <CustomeButtonWrapper>
            <CustomeButtons />
          </CustomeButtonWrapper>
        </Toolbar>
      </StyledHeader>
    </ThemeProvider>

    {/* Input search */}


  </>
  )
}

export default Header