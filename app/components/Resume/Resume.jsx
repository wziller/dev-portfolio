"use client";

import React from "react";
import "./Resume.css";
import ResumeNav from "./ResumeNav";
import { useState } from "react";

const Resume = () => {
  const [active, setActive] = useState("work_experience");

  return (
    <section id="resume">
      <h2 className="section-header">Resume</h2>
      <div id="resume-wrapper">
        <ResumeNav active={active} setActive={setActive} />
      </div>
      <div id="resume-display"></div>
    </section>
  );
};

export default Resume;
