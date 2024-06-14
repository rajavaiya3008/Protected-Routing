import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../slices/products";
import apiSlice from "../slices/api";
import { fetchData } from "../slices/api";


export const store = configureStore({
    reducer:{
        products:productsSlice,
        api:apiSlice,
    }
})