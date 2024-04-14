import React, { useEffect } from "react";
import "./ResumeDisplay.css"
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import References from "./References";
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
    case "references":
      displayEl = <References />;
      break;
    default:
      console.log("Unknown El Recieved");
  }

  return( <div id="display-window-wrapper">{displayEl}</div>);
};

export default ResumeDisplay;
