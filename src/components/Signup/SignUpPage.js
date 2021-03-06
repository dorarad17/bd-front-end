import React from "react";
import Signup from "./Signup";
import Logo from "../images/bd.png";

function SignUpPage() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-8 align-center">
          <img
            src={Logo}
            alt="BD"
            id="BD"
            className="img-fluid rounded mx-auto d-block"
          />
          <div>
            <Signup />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
