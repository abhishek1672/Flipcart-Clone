import styled from '@emotion/styled'
import { Box, InputBase, List, ListItem } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/actions/productActions';
import { Link } from 'react-router-dom';

const SearchComponent = styled(Box)`
     
      background:#fff;
      width:30%;
      border-radius:2px;
      margin-left:10px;
      display:flex;`;

const InputField = styled(InputBase)`
      padding-left:20px;
      width:90%`;

const SearchIconWrapper = styled(Box)`
      color:blue;
      padding-top:3px;`


const ListWrapper=styled(List)`
      position:absolute;
      color:#000;
      background:#FFFFFF;
      margin-top:35px;`

const Search = () => {

  const [text, setText] = useState('');
  const { products } = useSelector(state => state.getProducts);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getProducts);
  }, [dispatch])


  const getText = (value) => {
    setText(value);
  }


  return (
    <>
      <SearchComponent>
        <InputField
          placeholder='Search for products, brands and more...'
          onChange={(e) => getText(e.target.value)}
          value={text}
        />
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>

        {
          text &&
          <ListWrapper>
            {
              products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product =>{
                return (
                <ListItem key={product.id}>
                <Link 
                to={`/product/${product.id}`}
                onClick={()=>setText('')}
                style={{textDecoration:'none', color:'inherit'}}
                >
                    {product.title.longTitle}    
                </Link>
                                 
                </ListItem>
              )})
            }
            </ListWrapper>
        }

       
      </SearchComponent>
    </>
  )
}

export default Search;