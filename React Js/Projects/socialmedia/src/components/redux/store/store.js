import { configureStore } from "@reduxjs/toolkit";
import registerSlice from './../slice/registerSlice';
import loginSlice from './../slice/loginiSlice';
import postSlice from './../slice/postSlice';

let store=configureStore({
    reducer:{
        register:registerSlice,
        login:loginSlice,
        post:postSlice,
    },
});

export default store;