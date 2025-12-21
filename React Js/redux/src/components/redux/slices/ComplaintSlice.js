import { createSlice } from "@reduxjs/toolkit";

let complaintSlice=createSlice({
    name:"complaint",
    initialState:{complaints:[]},
    reducers:{
        addComplaint(state,action){
            state.complaints.push(action.payload);
        },
    },
});
export let {addComplaint}=complaintSlice.actions;
export default complaintSlice.reducer;