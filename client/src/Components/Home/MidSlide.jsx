// import { Box } from '@mui/material'
// import React from 'react'
// import Slide from './Slide'
// import styled from '@emotion/styled'

// const Component = styled(Box)`
//         display:flex;`

// const LeftComponent = styled(Box)`
//         width:82%;`

// const RightComponent = styled(Box)(({ theme }) => ({

//   root:{
//     marginTop: 10,
//     background: '#ffffff',
//     padding: 2,
//     marginLeft: 5,
//     marginRight: 2,
//     width: '18%',
//     textAlign: 'center',
//     [theme.breakpoints.down('md')]: {
//       display: 'none'
//     },

//   }

// }));




// const MidSlide = ({ products, title, timer }) => {

//   const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
//   return (
//     <Component>
//       <LeftComponent>
//         <Slide products={products}
//           title={title}
//           timer={timer} />

//       </LeftComponent>

//       <RightComponent>
//         <img src={adURL} style={{ width: 205 }} alt='AddURL' />
//       </RightComponent>
//     </Component>
//   )
// }

// export default MidSlide;

import { Box, ThemeProvider } from '@mui/material';
import React from 'react';
import Slide from './Slide';
import styled from '@emotion/styled';
import { createTheme } from '@mui/material/styles';

const theme = createTheme(); // Create a theme instance

const Component = styled(Box)`
  display: flex;
`;

const LeftComponent = styled(Box)(({theme})=>({
  width: '82%',
  [theme.breakpoints.down('md')]:{
    width:'100%'
  }

}));
  


const RightComponent = styled(Box)(({ theme }) => ({
  marginTop: 10,
  background: '#ffffff',
  padding: 2,
  marginLeft: 5,
  marginRight: 2,
  width: '18%',
  textAlign: 'center',
  display: 'block', // Set default display to block
  [theme.breakpoints.down('md')]: {
    display: 'none', // Hide on medium screens
  },
}));


const MidSlide = ({ products, title, timer }) => {
  const adURL =
    'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
  return (
    <ThemeProvider theme={theme}>
      <Component>
        <LeftComponent>
          <Slide products={products} title={title} timer={timer} />
        </LeftComponent>
        <RightComponent>
          <img src={adURL} style={{ width: 205 }} alt='AddURL' />
        </RightComponent>
      </Component>
    </ThemeProvider>
  );
};

export default MidSlide;
