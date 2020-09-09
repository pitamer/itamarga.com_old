import React from "react";
import "./index.css";

import avatar_pic from "./pita_in_peru.jpg";

function TitleSection() {
  return (
    <div className="bg-color">
      <div className="bg-image">
        <div className="title-container">
          <img
            className="avatar"
            src={avatar_pic}
            alt="Itamar near a lake in Peru"
          />
          <div className="title-text">
            <h1>
              <span className="first-in">I'm</span>{" "}
              <span className="second-in">Itamar,</span>
            </h1>
            <h2>A Web Developer</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TitleSection;
