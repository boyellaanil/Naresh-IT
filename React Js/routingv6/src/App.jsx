import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import COntact from './components/COntact'
import About from './components/About'
import ProductsData from './components/products/ProductsData'
import Men from './components/products/Men'
import Women from './components/products/Women'
import Kids from './components/products/Kids'
import Navbar from'./components/navbar/Navbar'
const App = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path="/home"element={<Home/>}></Route>
            <Route path="/contact"element={<COntact/>}></Route>
            <Route path="/about"element={<About/>}></Route>

            <Route path="/products"element={<ProductsData/>}>
                <Route path="men" element={<Men/>}></Route>
                <Route path="women"element={<Women/>}></Route>
                <Route path="kids"element={<Kids/>}></Route>
            </Route>
        </Routes>
    </div>
  )
}

export default App