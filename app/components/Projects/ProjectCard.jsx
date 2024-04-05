'use client'

import React from "react";
import "./Projects.css";

const ProjectCard = (project) => {
  console.log(project);
  const { name, description, link, year, image } = project.project;
  console.log(name);
  return (
    <div className="project-card-wrapper">
      <a
        onClick={() => window.open(link, "_blank")}
        className="project-image-wrapper"
      >
        <img src={image} />
      </a>
      <div className="project-text-wrapper">
        <h4 className="project-name-wrapper">{name}</h4>
        <p className="project-year-wrapper">
          <i>{year}</i>
        </p>
        <p className="project-description-wrapper">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
