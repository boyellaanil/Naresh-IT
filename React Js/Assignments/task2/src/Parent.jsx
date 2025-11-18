import React ,{useRef,useState} from 'react'
import Login from './Login'
import Registration from './Registration'

const Parent = () => {
    let [page,setPage]=useState("login");
    let user=useRef();
    let pass=useRef();
    let handleSubmit=(e)=>{
        e.preventDefault()
        let deails={
        user:user.current.value,
        pass:pass.current.value,
        };
        user.current.value="";
        pass.current.value="";
        console.log(deails);
    }; 
  return (
    <>
       {page === "login" && (
        <Login
          handleSubmit={handleSubmit}
          user={user}
          pass={pass}
          switchToRegister={() => setPage("register")}
        />
      )}

      {page === "register" && (
        <Registration
          handleSubmit={handleSubmit}
          user={user}
          pass={pass}
          switchToLogin={() => setPage("login")}
        />
      )}
    </>
  );
};

export default Parent