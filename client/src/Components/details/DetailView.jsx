import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductDetails } from '../../redux/actions/productActions';
import { Box, Grid, Typography, ThemeProvider } from '@mui/material';
import ActionItem from './ActionItem';
import styled from '@emotion/styled';
import ProductDetails from './ProductDetails';
import { createTheme, breakpoints } from '@mui/material/styles';



const theme=createTheme();



const Component = styled(Box)`
    background:#F2F2F2;
    margin-top:55px`;

const Container = styled(Grid)(({theme})=>({

  background: '#FFFFFF',
  display: 'flex',
  [theme.breakpoints.down('md')]:{
    margin:0,
  },

}));
    

const RightContainer = styled(Grid)`
    margin-top:50px;
    ${'' /* margin-left:8px; */}
    padding-left:8px;
    width:50%;
    `



const DetailView = () => {

  const dispatch = useDispatch();
  const { id } = useParams();

  const { loading, product } = useSelector(state => state.getProductDetails);


  useEffect(() => {
    if (product && id !== product.id)
      dispatch(getProductDetails(id))
  }, [dispatch, id, loading, product])



  return (

<ThemeProvider theme={theme}>
    <Component>
      {
        product && Object.keys(product).length &&
        <Container container>

          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItem product={product} />
          </Grid>


{/* Right Side */}
          <RightContainer item lg={8} md={8} sm={8} xs={12}>
             <ProductDetails product={product}  />
          </RightContainer>

        </Container>
      }
    </Component>
    </ThemeProvider>
  )
}

export default DetailView