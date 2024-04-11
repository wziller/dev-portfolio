import React, { useEffect } from "react";
import "./ResumeDisplay.css"
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Platforms from "./Platforms";
import Download from "./Download";

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
    case "download":
      displayEl = <Download />;
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
