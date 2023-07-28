
import React from 'react';
import { Grid, ThemeProvider } from '@mui/material';
import styled from '@emotion/styled';
import { imageURL } from '../../constants/data';
import { createTheme } from '@mui/material/styles';



const theme = createTheme(); // Create a theme instance


const Wrapper = styled(Grid)`
  margin-top: 10px;
`;

const Image = styled('img')(() => ({
    display: 'flex',
    marginTop: 20,
    justifyContent: 'space-between',
    width: '100%',
    [theme.breakpoints.down('md')]: {
        objectFit: 'cover',
        height: 120
    }
}));

const MidSection = () => {
    const url =
        'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';

    return (
        <>
        <ThemeProvider theme={theme}>

            <Wrapper container spacing={2}>
                {/* imageURL is an array of image URLs */}
                {imageURL.map((image, index) => (
                    <Grid item lg={4} md={4} xs={12} sm={12} key={index}>
                        <img src={image} style={{ width: '100%' }} alt='Images' />
                    </Grid>
                ))}
            </Wrapper>

            <Image src={url} alt='Covid' />
        </ThemeProvider>
        </>
    );
};

export default MidSection;
