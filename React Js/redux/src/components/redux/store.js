import { configureStore } from "@reduxjs/toolkit";
import counterSice from "./slices/CounterSlice";
import complaintSlice from "./slices/ComplaintSlice";
let store=configureStore({
    reducer:{
        counter:counterSice,
        complaint:complaintSlice,
    },
});
export default store;