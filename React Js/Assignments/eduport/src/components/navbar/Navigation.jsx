import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  let navData=[{
    name:"Home",
    path:"#"
  },
  {
    name:"Courses",
    path:"#"
  },
  {
    name:"Trainers",
    path:"#"
  },
  {
    name:"Add Course",
    path:"#"
  },
  {
    name:"Add Trainer",
    path:"#"
  },
]
  return (
    <div>
      <section>
        <ul>{navData.map((value)=>{
          return(
            <li>
              <p>{value.name}</p>
            </li>
          )
        })}</ul>
      </section>
    </div>
  )
}

export default Navigation