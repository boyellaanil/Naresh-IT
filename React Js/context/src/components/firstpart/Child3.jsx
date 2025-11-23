import React,{useContext} from 'react'
import { MessageContext } from '../context/MessageContext'

const Child3 = ({message}) => {
    let data=useContext(MessageContext);
    console.log(data);
  return (
    <div>
        {message}
        <p>{data}</p>
    </div>
  )
}

export default Child3