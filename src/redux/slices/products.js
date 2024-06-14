import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    entities:[]
}



const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        updateEntity: (state,action) => {
            state.entities = action.payload;
        }
    }
})

export const {updateEntity} = productSlice.actions;
export default productSlice.reducer;