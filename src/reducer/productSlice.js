import {createSlice} from '@reduxjs/toolkit'

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    LOADING: 'loading',
    ERROR:'error'
})



const productSlice = createSlice({
    name: 'products',
    initialState:{
        data: [],
        status: STATUSES.IDLE
    },
    reducers: {
        setProducts(state, action){
            state.data = action.payload;
        },
        setStatus(state, action){
            state.status = action.payload;
        }
       
    }
})

//api call 

export function fetchProducts(){
    return async function fetchProductsThunks(dispatch, getState){
       
        dispatch(setStatus(STATUSES.LOADING))
        try{
            const data = await fetch('https://fakestoreapi.com/products', {mode: "cors"})
            const result = await data.json()
            dispatch(setProducts(result));
            dispatch(setStatus(STATUSES.IDLE))
        }catch(err){
            console.log(err)
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}

export const {setProducts, setStatus } = productSlice.actions;
export default  productSlice.reducer;