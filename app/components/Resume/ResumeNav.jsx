

import { React } from "react";

import "./Resume.css";
const ResumeNav = (props) => {
const {active, setActive} = props

  return (
    <div id="resume-nav-wrapper">
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
            active === "download" ? "resume-tab-active" : "resume-tab"
          }
          onClick={() => setActive("download")}
        >
          <h3>Download</h3>
        </div>
        <div
          className={
            active === "references" ? "resume-tab-active" : "resume-tab"
          }
          onClick={() => setActive("platforms")}
        >
          <h3>References</h3>
        </div>
      </div>
    </div>
  );
};

export default ResumeNav;
