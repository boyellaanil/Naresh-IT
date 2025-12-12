import React from 'react'
import CreateNavbar from './CreateNavbar'

const Profile = () => {
  let profileData=[{
    name:"Notification",
    path:"#"
  },
  {
    name:"Log in",
    path:"/login"
  },
  {
    name:"sign in",
    path:"/register"
  },
  {
    name:"Logout",
    path:"#"
  },
]
  return (
    <div>
      <section>
        <CreateNavbar data={profileData} />
      </section>
    </div>
  )
}

export default Profile