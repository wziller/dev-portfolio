"use client";

import React from "react";
import "./Resume.css";
import ResumeNav from "./ResumeNav";
import { useState } from "react";
import ResumeDisplay from "../ResumeDisplay/ResumeDisplay";

const Resume = () => {
  const [active, setActive] = useState("education");

  return (
    <section id="Resume">
      <h2 className="section-header">Resume</h2>
      <div id="resume-wrapper">
        <ResumeNav active={active} setActive={setActive} />
        <ResumeDisplay active={active} />
      </div>
    </section>
  );
};

export default Resume;
