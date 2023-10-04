import {configureStore} from '@reduxjs/toolkit';
import cartReducer from '../reducer/cartSlice';
import productReducer from '../reducer/productSlice';

//newstore
const store = configureStore({
    reducer:{
        cart: cartReducer,
        products: productReducer,
    },
});

export default store;
