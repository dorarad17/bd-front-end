import React from "react";
import Signup from "./Signup";
import Logo from "./images/bd.png";

function LandingPage() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-7">
          <img
            src={Logo}
            alt="BD"
            id="BD"
            className="img-fluid rounded mx-auto d-block"
          />
        </div>
        <div className="col-lg-5">
          <Signup />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
