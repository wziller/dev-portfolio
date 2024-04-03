import React, { useEffect } from "react";
import "./ResumeDisplay.css"
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Experience from "./Experience";
import Platforms from "./Platforms";

const ResumeDisplay = (activeState) => {
  let { active } = activeState;
  let displayEl;
  switch (active) {
    case "work":
      displayEl = <WorkExperience />;
      break;
    case "education":
      console.log("education")
      displayEl = <Education />;
      break;
    case "experience":
      displayEl = <Experience />;
      break;
    case "platforms":
      displayEl = <Platforms />;
      break;
    default:
      console.log("Unknown El Recieved");
  }

  return( <div id="display-window-wrapper">{displayEl}</div>);
};

export default ResumeDisplay;
