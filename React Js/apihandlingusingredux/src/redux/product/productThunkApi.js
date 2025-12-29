import { createAsyncThunk } from "@reduxjs/toolkit";
import { addproducts, fetchProductsData } from "./productApi";

// ! fetch product thunk

export let fetchProducts =createAsyncThunk(
    "products//fetchProductsData",
    async()=>{
        let {data}=await fetchProductsData();
        return data;
    }
);

// ! add product thunk

export let addProduct=createAsyncThunk(
    "prooducts/addProducts",
    async(product)=>{
        let data =await addproducts(product);
        return data;
    }
);