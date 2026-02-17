import {createContext,useState} from "react"
export let FormProvider=({children})=>{
    let [details,setDetails]=useState({
        UserName:"",
        email:"",
        password:"",
    });
    let handleChange=(e)=>{
        let {name,value}=e.target
        setDetails({...details,[name]:value});
    };
    let handleSubmit=(e)=>{
        e.preventDefault();
        console.log(details);
        setDetails({
            UserName:"",
        email:"",
        password:"",
        });
    };
};
let {UserName,email,password}=details;
return(
    <formContext.Provider>
        value={{UserName,email,password, handleChange,handleSubmit}}
        {children}
    </formContext.Provider>
);