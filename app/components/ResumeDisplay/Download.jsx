import React from "react";
import Link from "next/link";
import "./Download.css";
import "./ResumeDisplay.css";

const Download = () => {
  return (
    <div className="resume-display-window">
      <div className="display-window-header-wrapper">
        <p className="resume-display-header"> Download</p>
      </div>
      <div id="download-content-wrapper">
        <p id="download-invite-text">
          I invite you to explore my comprehensive resume tailored for a
          software engineering position. Packed with a proven track record of
          designing innovative solutions, adept problem-solving skills, and a
          passion for crafting efficient code, my resume showcases the perfect
          blend of technical prowess and collaborative spirit.
          <br />
          <br />
          Dive in today to discover how I can seamlessly integrate into your
          team and contribute to your organization's success. Download my resume
          now and let's embark on a journey of excellence together!
        </p>
        <Link
          id="download-link"
          href={"wziller-resume-public.pdf"}
          target="_blank"
          rel="noopener noreferrer"
          locale={false}
          download
        >
          Download Here
        </Link>
      </div>
    </div>
  );
};

export default Download;
