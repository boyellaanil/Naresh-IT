import React from "react";

const Login = ({switchToRegister}) => {
  return (
    <div>
      <form action="">
        <article>
          <label htmlFor="">UserName</label>
          <input type="text" />
        </article>
        <article>
          <label htmlFor="">Password</label>
          <input type="password" />
        </article>
        <button type="submit">Login</button>
        <p>Don't you have account?</p>
         <span onClick={switchToRegister}>Register</span>
      </form>
    </div>
  );
};

export default Login;
