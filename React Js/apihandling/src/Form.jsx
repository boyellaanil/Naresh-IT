import React, { useState } from "react";

const Form = ({ addUser }) => {
  let [details, setDetails] = useState({
    name: "",
  });
  let { name } = details;
  let handleChange = (e) => {
    let { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
    addUser(details);
    setDetails({
      name: "",
    });
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input type="text" name="name" value={name} onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
