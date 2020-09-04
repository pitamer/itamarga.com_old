import React from "react";
import "./index.css";

// import Title from './Title'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Personal from './Personal'
import Hire from './Hire'

function MainColumn() {
  return (
    <div className="main-column">
        {/* <Title /> */}
        {/* <hr /> */}
        <About />
        <Skills />
        <Projects />
        <Personal />
        <Hire />
    </div>
  );
}

export default MainColumn;
