import React from 'react'
import CreateNavbar from './CreateNavbar'

const Profile = () => {
  let profileData=[{
    name:"Notification",
    path:"#"
  },
  {
    name:"Log in",
    path:"#"
  },
]
  return (
    <div>
      <section>
        <CreateNavbar />
      </section>
    </div>
  )
}

export default Profile