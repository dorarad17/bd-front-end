import React from "react";
import Smiley from "../images/smiley.gif";

function Applied() {
  return (
    <div className="container-fluid mx-auto">
      <img
        src={Smiley}
        alt="smiley"
        id="smiley"
        className="img-fluid rounded mx-auto d-block"
      />
    </div>
  );
}

export default Applied;
