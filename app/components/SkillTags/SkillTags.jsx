import React from "react";
import "./SkillTags.css";

const SkillTags = (skillsObj) => {
  let skills = skillsObj.skills;

  const tagGenerator = (skill) => {
    let tag;
    switch (skill) {
      case "node":
        tag = (
          <div className="tag" id="node-tag" key={skill}>
            <p className="tag-text">Node JS</p>
          </div>
        );
      case "docker":
        tag = (
          <div className="tag" id="docker-tag" key={skill}>
            <p className="tag-text">Docker</p>
          </div>
        );
        break;
      case "aws":
        tag = (
          <div className="tag" id="aws-tag" key={skill}>
            <p className="tag-text">AWS</p>
          </div>
        );
      case "api":
        tag = (
          <div className="tag" id="api-tag" key={skill}>
            <p className="tag-text">API's</p>
          </div>
        );
        break;
      case "github":
        tag = (
          <div className="tag" id="github-tag" key={skill}>
            <p className="tag-text">Github</p>
          </div>
        );
        break;
      case "html5":
        tag = (
          <div className="tag" id="html5-tag" key={skill}>
            <p className="tag-text">HTML5</p>
          </div>
        );
        break;
      case "css3":
        tag = (
          <div className="tag" id="css3-tag" key={skill}>
            <p className="tag-text">CSS3</p>
          </div>
        );
        break;
      case "javascript":
        tag = (
          <div className="tag" id="javascript-tag" key={skill}>
            <p className="tag-text">Javascript</p>
          </div>
        );
        break;
      case "react":
        tag = (
          <div className="tag" id="react-tag" key={skill}>
            <p className="tag-text">React</p>
          </div>
        );
        break;
      case "graphql":
        tag = (
          <div className="tag" id="graphql-tag" key={skill}>
            <p className="tag-text">GraphQL</p>
          </div>
        );
        break;
      case "jquery":
        tag = (
          <div className="tag" id="jquery-tag" key={skill}>
            <p className="tag-text">JQuery</p>
          </div>
        );
        break;
      case "docker":
        tag = (
          <div className="tag" id="docker-tag" key={skill}>
            <p className="tag-text">Docker</p>
          </div>
        );
        break;
      case "kibana":
        tag = (
          <div className="tag" id="kibana-tag" key={skill}>
            <p className="tag-text">Kibana</p>
          </div>
        );
        break;
      case "snowflake":
        tag = (
          <div className="tag" id="snowflake-tag" key={skill}>
            <p className="tag-text">Snowflake</p>
          </div>
        );
        break;
        case "google":
        tag = (
          <div className="tag" id="google-tag" key={skill}>
            <p className="tag-text">Google APIs</p>
          </div>
        );
        break;
      default:
        console.log("Unknown Tag Recieved");
    }
    return tag;
  };
  return (
    <div className="tags-wrapper">
      {skills.map((skill) => tagGenerator(skill))}
    </div>
  );
};

export default SkillTags;
