import React from 'react'

const Login = () => {
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <aside>
               <label htmlFor="">Email</label>
               <input type="text" name="email" value="email" onChange={handleChange}/>             
            </aside>
            <aside>
                <label htmlFor="">Password</label>
                <input type="password" name="password" value="password" onChange={handleChange}/>
            </aside>
            <aside>
                <button>Login</button>
            </aside>
        </form>
    </div>
  );
};

export default Login