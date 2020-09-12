import React from "react";
import "./index.css";

function Projects() {
  return (
    <div className="section projects">
      <h3>Stuff I Did</h3>
      <p>
        I've worked as a front-end / full-stack developer at{" "}
        <a
          className="link"
          href="https://www.tsgitsystems.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          TSG
        </a>{" "}
        for about a year.
        <br />
        <br />
        To be honest, some of my finest projects aren't supposed to be shared.
        Here are some of my open-source ones:
      </p>
      <p>
        <a
          className="link"
          href="https://github.com/pitamer/tagluz_client"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tagluz <span className="smalltext">(client)</span>
        </a>{" "}
        |{" "}
        <a
          className="link"
          href="https://github.com/pitamer/tagluz_server"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="smalltext">(server)</span>
        </a>
        <br />
        My boss used to manage shifts through WhatsApp messages and an excel
        file, so I built this app to enable workers to book shifts for
        themselves under management-set restrictions. It is regularly used by
        about 20 employees.
      </p>
      <p>
        <a
          className="link"
          href="https://github.com/pitamer/pyslate"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pyslate
        </a>
        <br />
        My first real-world useful app. It automated a tedious
        translation-related task routinely performed by dozens of employees in
        my company, myself included. Pyslate significantly improved my
        department's productivity, and it got me my first developer role.
      </p>
      <p>
        <a
          className="link"
          href="https://github.com/pitamer/itamarga"
          target="_blank"
          rel="noopener noreferrer"
        >
          itamarga.com
        </a>
        <br />
        This little webpage is a project I'm quite fond of. It took me numerous
        attempts to find a pleasant color scheme, a font combination that
        conveys the right message, balanced effects and a nice overall vibe. And
        it's open source, too!
      </p>
      <p className="note">
        I also used to be a product manager in the domain of machine learning
        for a year, and an intelligence analyst for about 3 years, but we're not
        here to talk about that ;)
      </p>
    </div>
  );
}

export default Projects;
