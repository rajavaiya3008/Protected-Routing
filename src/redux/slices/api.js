import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios';
import { updateEntity } from './products';

const initialState = {
    data:{},
    status:'loading',
    error:''
}

export const fetchData = createAsyncThunk('data/fetchData', async(config,{dispatch}) => {
    try{
        let {API_URL,update} = config;
        let data = await axios.get(API_URL);
        dispatch(update(data.data))
        return data.data;
    }catch (e){
        throw new Error(e);
    }
})

const apiSlice = createSlice({
    name:'api',
    initialState : initialState,
    reducers:{
        addData: () => {
            
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state,action) => {
                state.status = 'loading'
            })
            .addCase(fetchData.fulfilled, (state,action) => {
                state.status = 'ideal';
                state.data = action.payload
            })
            .addCase(fetchData.rejected, (state,action) => {
                state.status = 'error';
                state.error = action.payload || 'Something went Wrong'
            })

    }
})

export default apiSlice.reducer;