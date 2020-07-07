import React from "react";
import "./App.scss";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Loading from "./components/Loading";
import Home from "./components/Home";

setTimeout(() => {
  const { hash } = window.location;

  window.location.hash = !hash.replace("#/", "") ? "home" : hash;
}, 3000);

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Loading />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
