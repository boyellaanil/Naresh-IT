import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let fetchProductApi=()=>axios.get("https://fakestoreapi.com/products");

let productSlice=createSlice({
    name:"productSlice",
    initialState:{products:[]},
    reducers:[],
});

export default  productSlice.reducer;