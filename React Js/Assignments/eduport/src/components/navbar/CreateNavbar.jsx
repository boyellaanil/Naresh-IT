import React from 'react'

const CreateNavbar = ({data}) => {
  return (
    <div>
        <ul>{data.map((value)=>{
          return(
            <li>
              <p>{value.name}</p>
            </li>
          )
        })}
        </ul>
    </div>
  )
}

export default CreateNavbar