import React from "react";
import "./index.css";

import mongo from "./mongo.png";
import mui from "./mui.svg";

import Skill from "./Skill";

function Skills() {
  return (
    <div className="section skills">
      <h3>What I Can Do</h3>
      <Skill
        title="Good-lookin' pages"
        // align="right"
        tech={
          <span>
            <strong>HTML</strong>, <strong>CSS</strong> and{" "}
            <strong>JavaScript</strong>
          </span>
        }
        icons={
          <div className="tech-icons animate-3">
            <i className="fab fa-html5"></i>
            <i className="fab fa-css3-alt"></i>
            <i className="fab fa-js"></i>
            <i className="fab fa-html5"></i>
          </div>
        }
      />
      <Skill
        title="Fine modern web apps"
        // align="right"
        tech={
          <span>
            <strong>React</strong> and <strong>Material UI</strong>
          </span>
        }
        icons={
          <div className="tech-icons animate-2">
            <i className="fab fa-react"></i>
            <img id="mui" src={mui} alt="" />
            <i className="fab fa-react"></i>
          </div>
        }
      />
      <Skill
        title="Server-side things"
        // align="right"
        tech={
          <span>
            <strong>Node.js</strong> and <strong>MongoDB</strong>
          </span>
        }
        icons={
          <div className="tech-icons animate-2-2">
            <i className="fab fa-node"></i>
            <img id="mongo" src={mongo} alt="" />
            <i className="fab fa-node"></i>
          </div>
        }
      />
      <Skill
        title="Scripts and automation"
        // align="right"
        tech={
          <span>
            <strong>Python</strong>
          </span>
        }
        icons={
          <div className="tech-icons animate-1">
            <i className="fab fa-python"></i>
          </div>
        }
      />
      <p className="skills-note">
        Languages and technologies fascinate me, and I can't get enough of
        learning more!
      </p>
    </div>
  );
}

export default Skills;
