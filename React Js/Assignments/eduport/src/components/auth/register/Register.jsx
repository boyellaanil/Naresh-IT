import React from 'react'
import CreateForm from '../../form/CreateForm'

const Register = () => {
  let [regiisterDetails,setRegisterDetails]=useState({});
  let registerData=["Name","Email","Dob","Password","Confirm Password","Contact","Gender","Address"]
  return (
    <div>
      <CreateForm data={registerData}/>
    </div>
  )
}

export default Register