import React from "react";
import Logo from "./images/bd.gif";

function LandingPage() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-lg-8 align-center">
          <img
            src={Logo}
            alt="BD"
            id="BD"
            className="img-fluid rounded mx-auto d-block"
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
