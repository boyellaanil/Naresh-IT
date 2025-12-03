import React from "react";
import Navbar from "./components/Navbar";
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import Form from "./components/Form";
import DisplayData from "./components/DisplayData";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/register" component={Form} />
          <Route path="/displaydata" component={DisplayData} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
