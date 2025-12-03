import React from 'react'

const Form = ({uname,pword,handleChange,handleSubmit}) => {
  return (
    <div>
        <form action=""onSubmit={handleSubmit}>
            <label htmlFor="">username</label>
            <input type="text" name="uname" value={uname} onChange={handleChange} />
            <label htmlFor="">Password</label>
            <input type="password" name="pword" value={pword} onChange={handleChange}/>
            <button>Register</button>
        </form>
    </div>
  )
}

export default Form