
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { getProductDetailsreducer, getProductsReducer } from './reducers/productReducer';
import { cartReducer } from './reducers/cartReducer';

const reducer=combineReducers({
    getProducts:getProductsReducer,
    getProductDetails:getProductDetailsreducer,
    cart:cartReducer
}) 

const middleware=[thunk];

const store=createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(...middleware))
    
)

export default store;