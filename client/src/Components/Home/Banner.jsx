import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { bannerData } from '../../constants/data';
import styled from '@emotion/styled';
import { ThemeProvider } from '@mui/material';


import { createTheme } from '@mui/material/styles';



const theme = createTheme(); // Create a theme instance


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  }
};

const Image=styled("img")(({theme})=>({
  width: '100%',
  height: 280,

  [theme.breakpoints.down('sm')]:{
    objectFit:'cover',
    height:180 
  }
}));
      
const Banner = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Carousel 
        
        swipeable={false}
        draggable={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        showDots={false}
        slidesToSlide={1}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        >
         {
          bannerData.map((data)=>
          {
            return (
              <Image src={data.url} key={data.url} alt="banner"/>
            )
          })
       
         }
        </Carousel>
      </ThemeProvider>

        
    </>
  )
}

export default Banner

//-------------------------

// import React from 'react';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import { bannerData } from '../../constants/data';
// import styled from '@emotion/styled';

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 1,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 1,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//   },
// };

// const Image = styled("img")`
//   width: 100%;
//   height: 280px;
// `;

// const CustomCarousel = styled(Carousel)`
//   .react-multi-carousel-item {
//     width: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
// `;

// const Banner = () => {
//   return (
//     <>
//       <CustomCarousel
//         swipeable={false}
//         draggable={false}
//         responsive={responsive}
//         infinite={true}
//         autoPlay={true}
//         autoPlaySpeed={4000}
//         keyBoardControl={true}
//         showDots={false}
//         slidesToSlide={1}
//         containerClass="carousel-container"
//         dotListClass="custom-dot-list-style"
//         itemClass="carousel-item-padding-40-px"
//       >
//         {bannerData.map((data) => (
//           <Image src={data.url} key={data.url} alt="banner" />
//         ))}
//       </CustomCarousel>
//     </>
//   );
// };

// export default Banner;
