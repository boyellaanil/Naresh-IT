import { createSlice } from "@reduxjs/toolkit";
import { addUserData, fetchUsersData } from "../thunk/registerThunk";

let registerSlice=createSlice({
    name:"registerSlice",
    initialState:{
        userData:[],
    },
    reducers:[],
    extraReducers:(builder)=>{
        builder.addCase(fetchUsersData.fulfilled,(state,action)=>{
            state.userData=action.payload;
        })
        .addCase(addUserData.fulfilled,(state,action)=>{
            state.userData.push(action.payload);
        });
    },
});

export default registerSlice.reducer;