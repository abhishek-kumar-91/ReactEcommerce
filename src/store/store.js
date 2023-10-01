import {configureStore} from '@reduxjs/toolkit';
import cartReducer from '../reducer/cartSlice';
import productReducer from '../reducer/productSlice';


const store = configureStore({
    reducer:{
        cart: cartReducer,
        products: productReducer,
    },
});

export default store;