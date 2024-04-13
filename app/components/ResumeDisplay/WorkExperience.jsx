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
        <p className="company-dates">
          <i>February 2023-Present</i>
        </p>

        <ul className="responsibilities-list">
          <hr className="work-linebreak"></hr>
          <li>
            Migrated existing business operations to SaaS and cloud platforms.
          </li>
          <li>Transitioned company to a "remote-first" workplace.</li>

          <li>
            Implemented processes and workflows to modernize a 25-year old
            business.
          </li>
          <li>Hired, trained, and managed several new employees and contractors.</li>
          <li>
            Expanded brand visibility to wider and diverse audience to increase
            sales revenue.
          </li>
          <li>
            Established new partnerships with local businesses, while
            renegotiating existing ones to reduce operating expenses.
          </li>
        </ul>
        <SkillTags
          skills={[
            "javascript",
            "html5",
            "css3",
            "jquery",
            "google",
          ]}
        />
        <p className="company-name">Affirm - Developer Support Engineer</p>
        <p className="company-dates">
          <i>June 2022 - February 2023</i>
        </p>
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
            "google",
          ]}
        />
        <p className="company-name">Quesmed - Software Engineer </p>
        <p className="company-dates">
          <i>April 2022 - June 2022</i>
        </p>
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
        <p className="company-dates">
          <i>June 2019 - June 2021</i>
        </p>
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
