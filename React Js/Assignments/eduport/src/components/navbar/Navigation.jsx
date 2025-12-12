import React from 'react'
import { NavLink } from 'react-router-dom'
import CreateNavbar from './CreateNavbar'

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
        <CreateNavbar data={navData}/>
      </section>
    </div>
  )
}

export default Navigation