import React from 'react'
import { BrowserRouter , Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Products from './components/Products'

const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/about"component={About}></Route>
            <Route path="/contact"component={Contact}></Route>
            <Route path="/product"component={Products}></Route>
        </Switch>
        </BrowserRouter>
    </div>
  )
}

export default App