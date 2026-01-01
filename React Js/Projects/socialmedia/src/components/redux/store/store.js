import { configureStore } from "@reduxjs/toolkit";
import registerSlice from './../slice/registerSlice';

let store=configureStore({
    reducer:{
        register:registerSlice,
    },
});

export default store;