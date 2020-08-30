import React from "react";
import "./index.css";

import mongo from "./mongo.png";

import Skill from "./Skill";

function SkillsSection() {
  return (
    <div class="section skills">
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
          <div class="tech-icons animate-3">
            <i class="fab fa-html5"></i>
            <i class="fab fa-css3-alt"></i>
            <i class="fab fa-js"></i>
            <i class="fab fa-html5"></i>
          </div>
        }
      />
      <Skill
        title="Fine modern web apps"
        align="right"
        tech={
          <span>
            <strong>React</strong> and <strong>Material UI</strong>
          </span>
        }
        icons={
          <div class="tech-icons animate-2">
            <i class="fab fa-react"></i>
            <i class="fab fa-bootstrap"></i>
            <i class="fab fa-react"></i>
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
          <div class="tech-icons animate-2-2">
            <i class="fab fa-node"></i>
            <img src={mongo} alt="" />
            <i class="fab fa-node"></i>
          </div>
        }
      />
      <Skill
        title="Scripts and automation"
        align="right"
        tech={
          <span>
            <strong>Python</strong>
          </span>
        }
        icons={
          <div class="tech-icons animate-1">
            <i class="fab fa-python"></i>
          </div>
        }
      />
      <p>Technology fascinates me, and I can't get enough of learning more!</p>
    </div>
  );
}

export default SkillsSection;
