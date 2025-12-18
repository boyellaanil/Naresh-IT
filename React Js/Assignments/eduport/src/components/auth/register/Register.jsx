import React,{useContext, useState} from 'react'
import CreateForm from '../../form/CreateForm'
import { authContext } from '../../context/AuthContext';

const Register = () => {
  let [registerDetails,setRegisterDetails]=useState({
    name:"",
    email:"",
    dob:"",
    password:"",
    contact:"",
    gender:"",
    address:"",
    role:"user",
  });
  let {name,email,dob,password,contact,gender,address}=registerDetails;

  let {adduser}=useContext(authContext);
  let registerData=[
    {name:"name",stateValue:name,type:"text"},
    {name:"email",stateValue:email,type:"email"},
    {name:"dob",stateValue:dob,type:"date"},
    {name:"password",stateValue:password,type:"password"},
    {name:"contact",stateValue:contact,type:"text"},
    {name:"gender",stateValue:gender,type:"text"},
    {name:"address",stateValue:address,type:"text"},
  ];
  let handleChange=(e)=>{
    let {name,value}=e.target;
    setRegisterDetails({...registerDetails,[name]:value});
  }
  let handleSubmit=(e)=>{
    e.preventDefault();
     adduser(registerDetails);
     alert("Registration Successful");
     setRegisterDetails(
      {
    name:"",
    email:"",
    dob:"",
    password:"",
    contact:"",
    gender:"",
    address:"",
  });
  };
  return (
    <div>
      <CreateForm data={registerData} handleChange={handleChange}handleSubmit={handleSubmit}/>
    </div>
  )
}

export default Register