import React from "react";
import "./index.css";

import Resource from "./Resource";

function Resources() {
  const resources = [
    {
      icon: "fa fa-envelope",
      href: "mailto:itamarga@gmail.com",
      text: "itamarga@gmail.com"
    },
    {
      icon: "fa fa-linkedin",
      href: "\\",
      text: "I'm here"
    },
    {
      icon: "fa fa-stack-overflow",
      href: "\\",
      text: "Here too"
    },
  ];

  return (
    <div className="section resources">
      {resources.map((resource) => (
        <Resource
          key={resources.indexOf(resource)}
          icon={resource.icon}
          href={resource.href}
          text={resource.text}
        />
      ))}
    </div>
  );
}

export default Resources;
