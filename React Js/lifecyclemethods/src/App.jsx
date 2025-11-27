import React, { useState } from 'react'
import LifeCycle from './LifeCycle'

const App = () => {
  let [count,setCount]=useState()
  let inc=()=>{
    setCount(count+1)
  };
  return (
    <div>
        <LifeCycle name="Anil"/>
    </div>
  )
}

export default App