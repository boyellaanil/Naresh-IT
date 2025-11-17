import React from 'react'

const DisplayFormData = ({details:{email,password}}) => {
  return (
    <div>
        <h1>Email:{email}</h1>
        <h1>Password: {password}</h1>
    </div>
  )
}

export default DisplayFormData