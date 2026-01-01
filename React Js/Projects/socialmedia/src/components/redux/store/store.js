import { configureStore } from "@reduxjs/toolkit";
import registerSlice from './../slice/registerSlice';
import loginSlice from './../slice/loginiSlice';

let store=configureStore({
    reducer:{
        register:registerSlice,
        login:loginSlice,
    },
});

export default store;