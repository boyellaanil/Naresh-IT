import React, { useState } from "react";

const Form = () => {
  let [userName, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    console.log(userName);
    console.log(email);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <aside>
          <label htmlFor="">Username:</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
          />
        </aside>
        <aside>
          <label htmlFor="">Email:</label>
          <input
            type="text"
            value={email}
            onChange={(a) => setEmail(a.target.value)}
          />
        </aside>
        <aside>
          <button type="submit">Submit</button>
        </aside>
      </form>
    </div>
  );
};

export default Form;
