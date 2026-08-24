import React from 'react'
import Logo from './Logo';
import Navigation from './Navigation';
import Profile from './Profile';
import Style from './navbar.module.css'
const NavbarContainer = () => {
  return (
    <nav className={Style.navbar}>
    <Logo/>
    <Navigation/>
    <Profile/>  
    </nav>
  )
}
export default NavbarContainer