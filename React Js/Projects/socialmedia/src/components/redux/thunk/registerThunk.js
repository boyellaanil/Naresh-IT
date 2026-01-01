import { createAsyncThunk } from "@reduxjs/toolkit";
import { addUser, fetchUsers } from "../apiCalls";

export let addUserData=createAsyncThunk("auth/addUser",async(user)=>{
    let {data}=await addUser(user);
    return data;
});

export let fetchUsersData =createAsyncThunk("auth/fetchhUsers",async()=>{
    let {data}=await fetchUsers();
    return data;
});