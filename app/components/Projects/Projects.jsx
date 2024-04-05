import React from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectList = [
    {
      name: "Scene in SA",
      year: "2023-2024",
      description:
        "A production use consumer facing website for marketing a magazine. I designed the structure, layout and styling.",
      image:
        "https://wziller-portfolio.s3.us-east-2.amazonaws.com/Screenshot+2024-04-05+at+1.51.12+PM.png",
      link: "https://www.sceneinsa.com",
    },
    {
      name: "Texas Bar Scrape",
      year: "2023",
      description: "",
      image:
        "https://wziller-portfolio.s3.us-east-2.amazonaws.com/Screenshot+2024-04-05+at+4.20.59+PM.png",
      link: "",
    },
    {
      name: "Chelsea's Cookies",
      year: "2021",
      description: "",
      image:
        "https://wziller-portfolio.s3.us-east-2.amazonaws.com/Screenshot+2024-04-05+at+4.17.22+PM.png",
      link: "https://chelseas-cookies.herokuapp.com/",
    },
    {
      name: "Quarrel",
      year: "2021",
      description: "",
      image:
        "https://wziller-portfolio.s3.us-east-2.amazonaws.com/Screenshot+2024-04-05+at+4.14.44+PM.png",
      link: "https://quarrel-wziller.herokuapp.com/",
    },
  ];

  return (
    <section className="section-header" id="Projects">
      <h2 className="section-header">Projects</h2>
      <div id="project-cards-wrapper">
        {projectList.map((project) => (
          <ProjectCard key={`${project.name} key`} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
