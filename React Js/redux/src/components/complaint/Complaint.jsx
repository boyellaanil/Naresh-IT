import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addComplaint } from '../redux/slices/ComplaintSlice';

const Complaint = () => {
    let [complaintData,setComplaintData]=useState("");
    let complaints=useSelector(state=>state.complaint.complaints);
    let dispatch=useDispatch();
    let handleChange=(e)=>{
        setComplaintData(e.target.value);
    };
    let handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(addComplaint(complaintData));
        console.log(complaints);
    };
    console.log(complaints);
  return (
    <div>
        <form action=""onSubmit={handleSubmit}>
            <label htmlFor="">Complaint</label>
            <input type="text" onChange={handleChange} />
            <button type="submit">Submit</button>   
        </form>
    </div>
  )
}

export default Complaint