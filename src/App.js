import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div className="container">
        <Nav />
        <LandingPage />
      </div>
    </Router>
  );
}

export default App;
