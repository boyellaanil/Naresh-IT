import React, { useState } from "react";
import { Form } from "react-router-dom";

const Register = () => {
  let [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: "",
    contact: "",
    gender: "",
  });
  let {name,email,password,confirmPassword,dob,contact,gender}=userDetails;
  let registerData = [
    {
      name: "name",
      type: "text",
      value:name,
    },
    {
      name: "email",
      type: "email",
      value:email,
    },
    {
      name: "password",
      type: "password",
      value:password,
    },
    {
      name: "confirmPassword",
      type: "password",
      value:confirmPassword,
    },
    {
      name: "dob",
      type: "date",
      value:dob,
    },
    {
      name: "contact",
      type: "tel",
      value:contact
    },
  ];


  let handleChange = (e) => {
    let { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(userDetails);
    if(password===confirmPassword){
      setUserDetails({...userDetails,password:password});
      console.log(userDetaisl);
    }
    else{
      alert("Password mismatch");
    }
  };

  return (
    <div>
      <Form
        data={registerData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Register;
