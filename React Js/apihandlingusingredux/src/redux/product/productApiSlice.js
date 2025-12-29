import { createSlice } from "@reduxjs/toolkit";
import { addProduct, fetchProducts } from "./productThunkApi";

let productSlice=createSlice({
    name:"productSlice",
    initialState:{productsList :[],singleProduct:""},
    reducers:[],
    extraReducers:(builder)=>{
        builder
        .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.productsList=action.payload
        })
        .addCase(addProduct.fulfilled,(state,action)=>{
            state.productsList.push(action.payload);
        })
    }
})