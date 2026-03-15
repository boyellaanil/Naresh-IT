import React from 'react'
//Functional Component - props destructured directly from parent
const Counter = ({count,inc,dec}) => {
  return (
    <div>
        <h1>Counter Value: {count}</h1>
        <button onClick={()=>inc()}>Increment</button>
        <button onClick={()=>dec()}>Decrement</button>
    </div>
  );
};

//Alternate version - props destructured from nested object
const counter=({countData:{count,inc,dec}})=>{
    console.log(count,inc,dec);
    return(
        <div>
            <h1>Counter Value: {count}</h1>
            <button onClick={inc()}>Increment</button>
            <button onClick={dec()}>Decrement</button>
        </div>
    )
}
export default Counter