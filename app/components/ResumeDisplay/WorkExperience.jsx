import React from "react";
import "./ResumeDisplay.css";
import "./WorkExperience.css";
import SkillTags from "../SkillTags/SkillTags";
const WorkExperience = () => {
  return (
    <div className="resume-display-window">
      <div className="display-window-header-wrapper">
        <p className="display-window-header">Work Experience</p>
      </div>
      <div id="work-content-wrapper">
        <p className="company-name">Scene in SA Magazine - Publisher</p>

        <ul className="responsibilities-list">
          <hr className="work-linebreak"></hr>
          <li></li>
        </ul>
        <p className="company-name">Affirm - Developer Support Engineer</p>
        <ul className="responsibilities-list">
          <hr className="work-linebreak"></hr>
          <li>
            Built internal tools to increase efficiency and reduce operating
            expenses.
          </li>
          <div></div>
          <li>
            Managed external communications to merchants during outages and
            incidents.
          </li>
          <li>
            Communicated with merchants to assist in the integration of Affirm
            with their existing ecommerce platforms.
          </li>
          <li>
            Compiled Root Cause Analysis Reports for merchants in the instance
            of a breach of Service License Agreements.
          </li>
        </ul>
        <SkillTags
          skills={[
            "react",
            "github",
            "graphql",
            "javascript",
            "html5",
            "css3",
            "docker",
            "snowflake",
            "kibana",
            "jquery",
            "google"

          ]}
        />
        <p className="company-name">Quesmed - Software Engineer </p>
        <ul className="responsibilities-list">
          <hr className="work-linebreak"></hr>
          <li>
            Developing new components and features using React and GraphQL.
          </li>
          <li>A primary focus on the front-end user interaction.</li>
          <li>Worked with multiple remote teams.</li>
        </ul>
        <SkillTags
          skills={[
            "react",
            "github",
            "graphql",
            "javascript",
            "html5",
            "css3",
            "docker",
          ]}
        />
        <p className="company-name">Somerset High School - Master Teacher</p>

        <ul className="responsibilities-list">
          <hr className="work-linebreak"></hr>
          <li>
            Chaired the English Department (8 teachers), leading professional
            development training sessions, implementing new writing strategies
            for the team, and measuring/monitoring the success of the new
            strategies in order to improve and pivot, as necessary.
          </li>
          <li>
            Leveraged leadership and organizational skills in order to
            coordinate the administration of new curriculum across 3
            departments.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WorkExperience;
