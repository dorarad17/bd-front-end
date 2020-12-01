import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
} from "react-router-dom";

function App() {
  return (
    <HashRouter basename="/">
      <div className="container">
        <Switch>
          <div className="col-lg-12">
            <Route path="/" exact component={LandingPage} />
          </div>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
