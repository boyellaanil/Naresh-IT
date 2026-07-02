import { createContext, useState } from "react";
import axios from "axios";
export let authContext= createContext();

let  AuthProvider=({children})=>{
    let[usersdata,setUsersdata]=useState({
        users:[],
        singleUser:null,
        isLogin:false,
    });
    let {users,singleUser,isLogin}=usersdata;
    let adduser= async(data)=>{
        await axios.post("http://localhost:3000/users",data);
    };
    let fetchUsers= async()=>{
        let {data}= await axios.get("http://localhost:3000/users");
        setUsersdata({...usersdata,users:data});
    };
    let userId=sessionStorage.getItem("id");
     let role=sessionStorage.getItem("role");
    let validate=(email,password)=>{
        let data=users.find((value)=>value.email===email && value.password===password);
        if(data){
            alert("Login Successful");
            setUsersdata({...usersdata,isLogin:true});
            sessionStorage.setItem("id",data.id);
             sessionStorage.setItem("role",data.role);
        }
        else{
            alert("Invalid Credentials");
        }
    }
    return <authContext.Provider value={{ adduser,fetchUsers,validate,isLogin,userId,role }}>{children}</authContext.Provider>
}

export default AuthProvider;