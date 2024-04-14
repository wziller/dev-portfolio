import React from "react";
import Link from "react";
import "./ResumeDisplay.css";

const Download = () => {
  return (
    <div className="resume-display-window">
      <div className="display-window-header-wrapper">
        <p className="resume-display-header"> Download</p>
      </div>
      <div id="download-content-wrapper">
        <a
          href={"public/wziller-resume-public.pdf"}
          target="_blank"
          rel="noopener noreferrer"
          locale={false}
          download
        >
          Download Here
        </a>
      </div>
    </div>
  );
};

export default Download;
