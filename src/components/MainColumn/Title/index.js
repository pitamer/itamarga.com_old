import React from "react";
import "./index.css";

import avatar_pic from './pita_in_peru.jpg'

function TitleSection() {
  return (
    <div className="title-container">
      <img className="avatar" src={avatar_pic} alt="itamar_in_peru" />
      <div className="title-text">
        <h1>I'm Itamar,</h1>
        <h2>A Web Developer</h2>
      </div>
    </div>
  );
}

export default TitleSection;
