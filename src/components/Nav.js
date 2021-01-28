import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignUpPage from "./components/SignUpPage";

function Nav() {
  return (
    <div className="container">
      <nav className="navbar fixed-top justify-content-between">
        <a className="navbar-brand" href="">
          <h1>BD</h1>
        </a>
        <Router>
          <span className="links justify-content-end">
            <Link to="/sign-up" className="links">
              Signup
            </Link>{" "}
            |{" "}
            <Link to="/about" className="links">
              About
            </Link>
          </span>
          <Route path="/sing-up" exact component={SignUpPage} />
        </Router>
      </nav>
    </div>
  );
}

export default Nav;
