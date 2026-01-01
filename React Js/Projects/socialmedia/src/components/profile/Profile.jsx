import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsersData } from '../redux/thunk/registerThunk';
import Register from './../auth/register/Register';

const Profile = () => {
    let userData=useSelector((state)=>state.Register.userData);
    console.log(userData);

    let dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchUsersData());
    },[])
  return (
    <div>{userData.map((value)=>{
       return <img src={`${value.image}`} alt="" height="200px" />
    })}</div>
  )
}

export default Profile