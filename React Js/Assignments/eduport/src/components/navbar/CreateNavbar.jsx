import React from 'react'
import { NavLink } from 'react-router-dom'

const CreateNavbar = ({data}) => {
  return (
    <div>
        <ul>{data.map((value)=>{
          return(
            <li key={value.name}>
              <NavLink to={`${value.path}`}>{value.name}</NavLink>
            </li>
          )
        })}
        </ul>
    </div>
  )
}

export default CreateNavbar