import React from 'react'
import CreateForm from '../../form/CreateForm'

const Login = () => {
  let loginData=["Username","Password"]
  return (
    <div>
      <CreateForm data={loginData}/>
    </div>
  )
}

export default Login