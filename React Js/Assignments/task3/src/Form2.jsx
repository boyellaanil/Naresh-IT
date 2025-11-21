import React from 'react'

const Form2 = ({data, handleChange, handleSubmit }) => {
  return (
    <div>
        <form action=""onSubmit={handleSubmit}>
            <aside>
                <label htmlFor="">Email:</label>
            <input type="text" 
            name="email" 
            value={data.email} 
            onChange={handleChange} />
            </aside>
            <aside>
                <label htmlFor="">UserName:</label>
            <input type="text" 
            name="username" 
            value={data.username} 
            onChange={handleChange}
            />
            </aside>
            <aside>
                <label htmlFor="">Password:</label>
            <input type="password" 
             name="password" 
            value={data.password} 
            onChange={handleChange}
            />
            </aside>
            <aside>
                <button>Submit</button>
            </aside>
        </form>
    </div>
  )
}

export default Form2