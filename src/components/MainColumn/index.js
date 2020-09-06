import React from "react";
import "./index.css";

import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Personal from "./Personal";
import Hire from "./Hire";
import Resources from "./Resources";

function MainColumn() {
  return (
    <div className="main-column">
      <About />
      <Skills />
      <Projects />
      <Personal />
      <Hire />
      <Resources />
    </div>
  );
}

export default MainColumn;
