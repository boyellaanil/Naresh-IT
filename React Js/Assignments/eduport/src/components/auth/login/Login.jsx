import React,{useState} from "react";
import CreateForm from "../../form/CreateForm";


const Login = () => {
  let [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  let { email, password } = loginDetails;
  let loginData = [
    { namme: "email", stateValue: email },
    { name: "password", stateValue: password },
  ];
  let handleChange = (e) => {
    let { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };
  return (
    <div>
      <CreateForm data={loginData} handleChange={handleChange} />
    </div>
  );
};

export default Login;
