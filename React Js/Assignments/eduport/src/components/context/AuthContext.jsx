import { createContext, useState } from "react";
import { axios } from 'axios';

export let authContext= createContext();

let  AuthProvider=({children})=>{
    let[usersdata,setUsersdata]=useState({
        users:[],
        singleUser:null,
    });

    let adduser= async(data)=>{
        await axios.post("http://localhost:3000/users",data)
    };
    return <authContext.Provider value={{adduser}}>{children}</authContext.Provider>
}

export default AuthProvider;