import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Slide from './Slide';
import { Box } from '@mui/material'
import styled from '@emotion/styled'
import {getProducts} from  '../../redux/actions/productActions';
import {useDispatch, useSelector} from 'react-redux';
import MidSlide from './MidSlide';
import MidSection from './MidSection';



const Component=styled(Box)`
        padding:10px 10px;
        background:#F2F2F2`

// componenets

const Home = () => {

   const {products}=useSelector(state=>state.getProducts);
   console.log(products);

  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch ])

  return (
  <>

      <Navbar />
          <Component>
              <Banner />
              <MidSlide products={products} title="Deal of the Day" timer={true}/>
              <MidSection/>
              <Slide products={products} title="Discounts for You" timer={false} />
              <Slide products={products} title="Top Selection's" timer={false} />
          </Component>
  </>
  )
}

export default Home