import axios from "axios";

import * as actionsTypes from '../constants/productConstants';

const URL="http://localhost:8080";

export const getProducts=()=> async (dispatch)=>{

    try {
       const {data}=await axios.get(`${URL}/products`); 
       dispatch({type:actionsTypes.GET_PRODUCTS_SUCCESS,payload:data});

    } catch (error) {
        dispatch({ type: actionsTypes.GET_PRODUCTS_FAIL, payload:error.message});
    }
}


// Get Products Details for Detail view

export const getProductDetails=(id)=>async(dispatch)=>{

    try {
        dispatch({type:actionsTypes.GET_PRODUCT_DETAILS_REQUETS});

        const { data } = await axios.get(`${URL}/product/${id}`);
        dispatch({ type: actionsTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: data });

        
         }          
         catch (error) {
        dispatch({ type: actionsTypes.GET_PRODUCT_DETAILS_FAIL, payload: error.message });

    }

}