import { createAsyncThunk } from "@reduxjs/toolkit";
import { addproducts, fetchProductsData,deleteProduct,editProduct } from "./productApi";
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
// ! edit product data
export let editProductData=createAsyncThunk(
    "products/editProduct",
    async({id,product})=>{
        let data=await editProduct(id,product);
        return data;
    }
);
// ! delete the product data
export let deleteProductData=createAsyncThunk(
    "products/deleteProduct",
    async(id)=>{
        let data = await deleteProduct(id)
        return data;
    }
);