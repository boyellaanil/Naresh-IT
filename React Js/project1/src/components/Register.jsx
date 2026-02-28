import React from 'react'
const Register = () => {
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <aside>
                <label htmlFor="">UserName</label>
                <input type="text" name="UserName" value="UserName" onChange={handleChange}/>
            </aside>
            <aside>
               <label htmlFor="">Email</label>
               <input type="text" name="email" value="email" onChange={handleChange}/>             
            </aside>
            <aside>
                <label htmlFor="">Password</label>
                <input type="password" name="password" value="password" onChange={handleChange}/>
            </aside>
            <aside>
                <button>Register</button>
            </aside>
        </form>
    </div>
  )
}

export default Register