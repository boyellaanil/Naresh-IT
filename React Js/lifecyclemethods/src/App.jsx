import React, { useState } from 'react'
import LifeCycle from './LifeCycle'
import Data from './Data'

const App = () => {
  let [count,setCount]=useState()
  let inc=()=>{
    setCount(count+1);
  };
  return (
    <div>
      <Data/>
        <LifeCycle name="Anil"count={count} inc={inc}/>
    </div>
  )
}

export default App