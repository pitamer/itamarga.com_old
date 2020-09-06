import React from "react";
import "./index.css";

function Resource(props) {
  return (
    <div className="resource">
      <div className="resource-icon-wrapper">
        <a className="resource-icon" href={props.href}>
          <i className={props.icon} />
        </a>
      </div>
      <span className="resource-text">
        {props.text}
      </span>
    </div>
  );
}

export default Resource;
