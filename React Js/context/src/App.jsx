import React from 'react'
import Parent from './components/firstpart/Parent'
import Parent2 from './components/secondpart/Parent2'
import Data from './components/Data'
import Data1 from './components/Data1'
const App = () => {
  return (
    <>
     <Parent message="some people buy a new vehicle from app"/>
        <Parent2/>
        <Data/>
        <Data1/>
    </>    
  );
};

export default App