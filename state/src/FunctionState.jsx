import React from "react";

let FunctionState=()=>{
    console.log(React.useState());
    let[userName,setUsername] =React.useState("Anil");
    console.log(userName);
    console.log(setUsername);

    let [count,setCount]=React.useState(0);
    return(
        <>
            <h1 onClick={()=>setUsername("Arafath")}>My name is {userName}</h1>

            <h1>Count{count}</h1>
            <button onClick={()=>setCount(count+1)}>Inc</button>
            <button onClick={()=>count>0 && setCount(count-1)}>Dec</button>
            <button onClick={()=>setCount(0)}>Reset</button>
        </>
    ) 
}
export default FunctionState;