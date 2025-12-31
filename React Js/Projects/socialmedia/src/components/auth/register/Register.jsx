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
  let registerData = [
    {
      name: "name",
      type: "text",
    },
    {
      name: "email",
      type: "email",
    },
    {
      name: "confirmPassword",
      type: "password",
    },
    {
      name: "dob",
      type: "date",
    },
    {
      name: "contact",
      type: "tel",
    },
  ];

  let handleChange = (e) => {
    let { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(userDetails);
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
