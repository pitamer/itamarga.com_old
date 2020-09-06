import React from "react";
import "./index.css";

import useIntersect from "../../useObserver";

function About() {
  const buildThresholdArray = () =>
    Array.from(Array(100).keys(), (i) => i / 100);

  const [ref, entry] = useIntersect({
    threshold: buildThresholdArray(),
  });

  return (
    <div
      ref={ref}
      ratio={entry.intersectionRatio}
      style={{ opacity: `${({ ratio }) => ratio || 1}` }}
      className="section about"
    >
      <h3>Hello :)</h3>
      <p>
        I'm a web developer from Be'er Sheva, Israel. I am passionate about
        elegant problem-solving and clever design.
      </p>
    </div>
  );
}

export default About;
