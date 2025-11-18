import React from "react";

const Login = ({handleSubmit,user,pass,switchToRegister}) => {
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <article>
          <label htmlFor="">UserName</label>
          <input type="text" ref={user}/>
        </article>
        <article>
          <label htmlFor="">Password</label>
          <input type="password" ref={pass}/>
        </article>
        <button type="submit">Login</button>
        <p>Don't you have account?</p>
        <a href=""onClick={switchToRegister}>Register</a>
      </form>
    </div>
  );
};

export default Login;
