import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice"

let store=configureStore({
    reducer:{
        product:productSlice,
    },  
});

export default store;