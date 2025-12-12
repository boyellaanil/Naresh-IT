import React from 'react'
import NavbarContainer from './components/navbar/NavbarContainer';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
        <NavbarContainer/> 
      <section>
        <Outlet/>
      </section>
    </div>
  )
}

export default App