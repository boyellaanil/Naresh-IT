import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form } from "react-router-dom";
import { addUserData } from "./../../redux/thunk/registerThunk";

const Register = () => {
  let [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: "",
    contact: "",
    gender: "",
    image: "",
    followers: [],
    following: [],
  });
  let { name, email, password, confirmPassword, dob, contact, gender } =
    userDetails;
  let registerData = [
    {
      name: "name",
      type: "text",
      value: name,
    },
    {
      name: "email",
      type: "email",
      value: email,
    },
    {
      name: "password",
      type: "password",
      value: password,
    },
    {
      name: "confirmPassword",
      type: "password",
      value: confirmPassword,
    },
    {
      name: "dob",
      type: "date",
      value: dob,
    },
    {
      name: "contact",
      type: "tel",
      value: contact,
    },
  ];

  let dispatch = useDispatch();

  let handleChange = (e) => {
    let { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(userDetails);
    if (password === confirmPassword) {
      setUserDetails({ ...userDetails, password: password });
      console.log(userDetails);
      dispatch(addUserData(userDetails));
    } else {
      alert("Password mismatch");
    }
  };

  let handleImage = async (e) => {
    let image = e.target.files[0];
    let convertedImage = await imageData(image);
    // console.log(convertedImage);
    setUserDetails({ ...userDetails, image: convertedImage });
  };
  return (
    <form onSubmit={handleSubmit}>
      <Form
        data={registerData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <article name="gender" value={gender} onChange={handleChange}>
        <label htmlFor="">Gender</label>
        <input type="radio" value="male" name="gender" />
        <input type="radio" value="female" name="gender" />
        <input type="radio" value="others" name="gender" />
      </article>
      <article>
        <label htmlFor="">Profile Pic</label>
        <input type="file" onChange={handleImage} accept="image/*" />
      </article>
      <button>Submit</button>
    </form>
  );
};

export default Register;
