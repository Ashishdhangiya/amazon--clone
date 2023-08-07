import { createSlice } from "@reduxjs/toolkit";

const insitialState={
    products:[],
    userInfo:[],
}

export const amazonSlice = createSlice({
    name:"amazon",
    insitialState,
    reducers:{
        addToCart:(state,action)=>{
            state.products = action.payload
        }
    }
})

export const{addToCart} = amazonSlice.actions
export default amazonSlice.reducer