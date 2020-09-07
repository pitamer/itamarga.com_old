import React from "react";
import "./index.css";

function Resources() {
  const resources = [
    {
      icon: "fa fa-envelope",
      href: "mailto:itamarga@gmail.com",
      text: "itamarga@gmail.com",
    },
  ];

  return (
    <div className="section resources">
      {resources.map((resource) => (
        <div className="resource" key={resources.indexOf(resource)}>
          <div className="resource-icon-wrapper">
            <a className="resource-link" href={resource.href}>
              <i className={resource.icon} />
            </a>
          </div>
          <span className="resource-text">{resource.text}</span>
        </div>
      ))}
    </div>
  );
}

export default Resources;
