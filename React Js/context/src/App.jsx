import React from 'react'
import Parent from './components/firstpart/Parent'
import MessageProvider from './components/context/MessageContext'
import Parent2 from './components/secondpart/Parent2'
const App = () => {
  return (
    <>
     <Parent message="some people buy a new vehicle from app"/>
        <Parent2/>
    </>    
  )
}

export default App