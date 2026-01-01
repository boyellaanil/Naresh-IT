import React from "react";
import Form from "../../form/Form";

const Login = () => {
  let [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  let {email,password}=userDetails;
  let loginData=[
    {
      naame:"email",
      type:"email",
      value:email,
    },
    {
      naame:"password",
      type:"password",
      value:password,
    },
  ];
  let handleChange=(e)=>{
    let {name,value}=e.target;
    setUserDetails({...userDetails,[name]:value});
  };
  return <div>
    <form action="">
      <Form data={loginData} handleChange={handleChange}/>
      <button>Submit</button>
    </form>
  </div>;
};

export default Login;
