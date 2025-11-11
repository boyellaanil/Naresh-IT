import React from 'react'
import Child from './Child.jsx'

const App = () => {
    let [color,setColor] = React.useState("red");
    let [scale,setScale] = React.useState(1);
    let colorChange=(e)=>{
        console.log(e);
        setColor("blue");
    }
    let handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Form submitted");
    }
    let handleScale=(e)=>{
        setScale(0.5);
        console.log("Form scaled");
    }
  return (
    <div>
        <Child color={color}colorChange={colorChange} handleSubmit={handleSubmit} scale={{scale,handleScale}}/>
    </div>
  )
}

export default App