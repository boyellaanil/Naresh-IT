import React, { useContext, useState,useEffect } from "react";
import { userContext } from "./context/UserProvider";

const Form = () => {
  let { addUser, singleUser, editData } = useContext(userContext);
  let [details, setDetails] = useState({
    name: singleUser.name || "",
  });

  useEffect(() => {
  setDetails({ name: singleUser.name || "" });
}, [singleUser]);

  let handleChange = (e) => {
    let { name, value } = e.target;
    setDetails({ [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
    singleUser.name ? editData(details) : addUser(details);
    setDetails({ name: "" });
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input
          type="text"
          name="name"
          value={details.name}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;