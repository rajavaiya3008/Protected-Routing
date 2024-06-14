import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems:[]
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        loadCartItems:(state,action) => {
            state.cartItems = action.payload
        }
    }
})

export const {loadCartItems} = cartSlice.actions;
export default cartSlice.reducer;