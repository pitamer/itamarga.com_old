import React from "react";
import "./index.css";

function Personal() {
  return (
    <div className="section personal">
      <h3>Get to Know</h3>
      <p>
        I enjoy rock climbing, watching great movies, playing blues on my
        guitar, and mornings in the desert. I also favor bycicle rides over any
        other means of transportation.
      </p>
      <p>
        Regular listener of{" "}
        <a
          className="link"
          href="https://open.spotify.com/show/6HD5lER0EM4sQfErIBawUJ?si=0bjbBsgtTkWKNPxOwn4UCg"
        >
          Osim Tochna
        </a>{" "}
        and{" "}
        <a
          className="link"
          href="https://open.spotify.com/show/5CmjtjpdcKkHDnr0601uYS?si=HkV8639ySkiosJWfLGPYUA"
        >
          Wix Engineering Podcast
        </a>
        .
      </p>
    </div>
  );
}

export default Personal;
