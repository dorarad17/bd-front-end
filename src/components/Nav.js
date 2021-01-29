import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="container">
      <nav className="navbar fixed-top justify-content-between">
        <a className="navbar-brand" href="">
          <Link to="/">
            <h1>BD</h1>
          </Link>
        </a>

        <span className="links justify-content-end">
          <Link to="/sign-up">Sign-up</Link> |{" "}
          <Link to="/food" className="links">
            Food
          </Link>{" "}
          |{" "}
          <Link to="/drinks" className="links">
            Drinks
          </Link>{" "}
          |{" "}
          <Link to="/rooms" className="links">
            Rooms
          </Link>{" "}
          |{" "}
          <Link to="/admin" className="links">
            Admin
          </Link>
        </span>
      </nav>
    </div>
  );
}

export default Nav;
