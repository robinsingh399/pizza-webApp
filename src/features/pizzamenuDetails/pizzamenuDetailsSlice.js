import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    results:[],
    cart:[]
};


const pizzamenuDetailsSlice = createSlice({
    name:'pizzaDetails',
    initialState,
    reducers:{
        setResults : (state,action)=>{
            state.results = action.payload.result;
        },
        addToCart:(state,action)=>{
            state.cart = [...state.cart,...action.payload.cart];
        }
    },
});


export const {setResults,addToCart} = pizzamenuDetailsSlice.actions;
export const selectResults = (state)=>state.pizzaDetails.results;
export const selectCart = (state) => state.pizzaDetails.cart;
export default pizzamenuDetailsSlice.reducer;