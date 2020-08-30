import React from "react";
import "./index.css";

function Bubble(props) {
  return (
    <div className="bubble-wrapper">
      <div className="bubble">{props.icons}</div>
    </div>
  );
}

export default Bubble;
