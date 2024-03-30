

import { React } from "react";

import "./Resume.css";
const ResumeNav = (props) => {
const {active, setActive} = props

  return (
    <div>
      <div id="resume-nav">
        <div
          className={active === "work" ? "resume-tab-active" : "resume-tab"}
          onClick={() => setActive("work")}
        >
          <h3>Work Experience</h3>
        </div>
        <div
          className={
            active === "education" ? "resume-tab-active" : "resume-tab"
          }
          onClick={() => setActive("education")}
        >
          <h3>Education</h3>
        </div>
        <div
          className={
            active === "experience" ? "resume-tab-active" : "resume-tab"
          }
          onClick={() => setActive("experience")}
        >
          <h3>Technical Experience</h3>
        </div>
        <div
          className={
            active === "platforms" ? "resume-tab-active" : "resume-tab"
          }
          onClick={() => setActive("platforms")}
        >
          <h3>Platforms and Tool</h3>
        </div>
      </div>
    </div>
  );
};

export default ResumeNav;
