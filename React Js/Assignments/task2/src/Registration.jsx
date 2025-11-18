import React from "react";

const Registration = ({handleSubmit,user,pass,switchToLogin}) => {
  return (
    <div>
      <form action=""onSubmit={handleSubmit}>
        <article>
          <label htmlFor="">UserName</label>
          <input type="text" ref={user}/>
        </article>
        <article>
          <label htmlFor="">Password</label>
          <input type="password" ref={pass} />
        </article>
        <button type="submit">Register</button>
        <p>Already have an account?</p>
        <span onClick={switchToLogin}>Login</span>
      </form>
    </div>
  );
};

export default Registration;
