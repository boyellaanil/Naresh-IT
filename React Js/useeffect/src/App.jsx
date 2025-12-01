import React, { useEffect, useState } from 'react'
import Child from './Child';

//! useEffect will accept the two parameters 1.functions ,2 .dependencies
const App = () => {
    let [count,setCount]=useState(0);

    //!it will behaves like a render method
    useEffect(()=>{
        console.log("i am use render method")
    });

    //! below behaves like componentDidMount
     useEffect(()=>{
        console.log("i am a component did mount")
    },[]);

    let handleClick=()=>{
        setCount(count+1);
    }

    //! below behaves like componentDidUpdate
     useEffect(()=>{
        console.log("i am a component did Update")
    },[count]);
    
  return (
    <div>
        {count<=5 && <h1>{count}</h1>}
    </div>
  )
}

export default App