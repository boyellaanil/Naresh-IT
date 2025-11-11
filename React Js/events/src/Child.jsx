import React from 'react'
import Form from './Form.jsx'

const Child = ({color,colorChange,handleSubmit,scale:{scale,handleScale}}) => {
  return (
    <div>
        <h1 style={{color:color,transform:`scale(${scale})`}}onMouseOver={handleScale}>I am a child Component</h1>
        <button onClick={colorChange}>Click here to chang the color</button>
        <Form handleSubmit={handleSubmit}/>
    </div>
  )
}

export default Child