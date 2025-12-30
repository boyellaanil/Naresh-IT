import { createSlice } from "@reduxjs/toolkit";
import { addProduct, editProductData, fetchProducts } from "./productThunkApi";

let productSlice=createSlice({
    name:"productSlice",
    initialState:{productsList :[],singleProduct:"",error:"  ",pending:false },
    reducers:[],
    extraReducers:(builder)=>{
        builder
        .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.productsList=action.payload
        })
        .addCase(addProduct.fulfilled,(state,action)=>{
           state.productsList.push(action.payload.data);
        })
        .addCase(editProductData.fulfilled,(state,action)=>{
            let indexValue=state.productsList.findIndex((value)=>value.id===action.payload.data.id);
        });
    },
});

export default productSlice.reducer;