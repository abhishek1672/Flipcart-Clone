import { Box, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material'
import React from 'react'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import styled from '@emotion/styled';

const SmallText=styled(Box)`
        font-size:10px;
        vertical-align:baseline;
        & p>{
            font-size:5px;
            margin-top:13px;
        }`

const StyledBadge=styled(LocalOfferIcon)`
        margin-right:10px;
        color:#00CC00;
        font-size:14px;`;

const ColumnText=styled(TableRow)`
        font-size:14px;
        vertical-align:baseline;
        & td>{
            font-size:14px;
            margin-top:10px;
            border:none;
        }
        `;

const ProductDetails = ({product}) => {

    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';


    const date=new Date(new Date().getTime()+(5*24*60*60*1000));

  return (
    <>
     
          <Typography>{product.title.longTitle}</Typography>
          <Typography style={{ marginTop: 5, color: '#878787', fontSize: 14 }}>
              8 Ratings & 1 Reviews
              <Box component="span"><img src={fassured} style={{ width: 77, marginLeft: 20 }} alt='fshort ' /></Box>
          </Typography>

          <Typography>
              <Box component="span" style={{ fontSize: 28 }}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
              <Box component="span" style={{ color: "#878787" }}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
              <Box component="span" style={{ color: "#388E3c" }}>{product.price.discount}Off</Box>&nbsp;&nbsp;&nbsp;
          </Typography>

          <Typography>Available Offers</Typography>
          <SmallText>
              <Typography><StyledBadge />Special PriceGet extra 10% off (price inclusive of cashback/coupon)T&C</Typography>
              <Typography><StyledBadge />Get extra 20% off upto ₹50 on item(s) T&C</Typography>
              <Typography><StyledBadge />Bank Offer5% Cashback on Flipkart Axis Bank CardT&C</Typography>
              <Typography><StyledBadge />Partner OfferPurchase now & get 1 surprise cashback coupon in Future</Typography>
              <Typography><StyledBadge />Partner OfferExtra 10% off on Men's shoes by PUMA, NIKE & More. Offer Auto Applied. T&C</Typography>
              

          </SmallText> 

          <Table>
            <TableBody>
                  <ColumnText>
                    <TableCell style={{color:'#878787'}}>Delivery</TableCell>
                      <TableCell style={{fontWeight:600}}>Delivery by {date.toDateString()} | ₹40</TableCell>
                  </ColumnText>

                  <ColumnText>
                    <TableCell style={{color:'#878787'}}>Warranty</TableCell>
                      <TableCell>No Warranty</TableCell>
                  </ColumnText>

                  <ColumnText>
                    <TableCell style={{color:'#878787'}}>Seller</TableCell>
                      <TableCell >
                          <Box component="span" style={{ color: '#2874f0' }}>SuperComNet</Box>
                          <Typography>GST invoice available</Typography>
                          <Typography>View more sellers starting from ₹{product.price.cost}</Typography>
                      </TableCell>
                  </ColumnText>
                  <ColumnText>
                <TableCell colSpan={2}>
                          <img src={adURL}  style={{width:390}} alt="SuperCoin"/>
                </TableCell>
                  </ColumnText>

                  <ColumnText>
                      <TableCell style={{ color: '#878787' }}>Description</TableCell>
                      <TableCell>{product.description}</TableCell>
                  </ColumnText> 


            </TableBody>
          </Table>
    </>
  )
}

export default ProductDetails