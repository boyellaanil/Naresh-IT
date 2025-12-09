import React from "react";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Form from "./components/Form";
import DisplayData from "./components/DisplayData";

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/form" component={Form}></Route>
        <Route path="/display" component={DisplayData}></Route>
      </Switch>
    </div>
  );
};

export default App;
