import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Nav from "./components/Nav";
import SignUpPage from "./components/Signup/SignUpPage";
import Admin from "./components/Admin/Admin";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path="/" component={LandingPage} />
        <Route path="/sign-up" component={SignUpPage} />
        <Route path="/admin" component={Admin} />
      </div>
    </Router>
  );
}

export default App;
