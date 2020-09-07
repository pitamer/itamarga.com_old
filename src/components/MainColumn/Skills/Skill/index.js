import React from "react";
import "./index.css";

import Bubble from "./Bubble";

function Skill(props) {
  return (
    <div className={`skill ${props.align}`}>
      <Bubble icons={props.icons} />
      <p className="skill-text">
        {props.title}
        <br />
        with {props.tech}
      </p>
    </div>
  );
}

export default Skill;
