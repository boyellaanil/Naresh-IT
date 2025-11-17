import React from "react";

const Registration = ({switchToLogin}) => {
  return (
    <div>
      <form action="">
        <article>
          <label htmlFor="">FirstName</label>
          <input type="text" />
        </article>
        <article>
          <label htmlFor="">LastName</label>
          <input type="text" />
        </article>
        <article>
          <label htmlFor="">UserName</label>
          <input type="text" />
        </article>
        <article>
          <label htmlFor="">Age</label>
          <input type="number" />
        </article>
        <article>
          <label htmlFor="">Phone</label>
          <input type="number" />
        </article>
        <article>
          <label htmlFor="">Email</label>
          <input type="text" />
        </article>
        <article>
          <label htmlFor="">Password</label>
          <input type="text" />
        </article>
        <button type="submit">Register</button>
        <p>Already have an account?</p>
        <span onClick={switchToLogin}>Login</span>
      </form>
    </div>
  );
};

export default Registration;
