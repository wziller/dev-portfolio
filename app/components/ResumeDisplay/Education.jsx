import React from 'react'
import "./ResumeDisplay.css";
import "./Education.css"

const Education = () => {
  return (
    <div className="resume-display-window">
      <div className="display-window-header-wrapper">
        <p className="display-window-header">Education</p>
      </div>
      <div id="education-content-wrapper">
        <p className="school-name">App Academy</p>
        <p className="school-dates">
          <i>Graduated: 2021 - Software Engineering</i>
        </p>
        <ul className="responsibilities-list">
          <hr className="education-linebreak"></hr>
          <li>
            Object Oriented Programming (OOP) with a focus on Javascript and
            Python
          </li>
          <li>Backend Development focusing on HTML5 and CSS3 </li>
          <li>Test Driven Development (TDD) using Jest</li>
          <li>Systems Design & Architecture</li>
          <li>
            Data Structures & Algorithms including Arrays, Linked Lists, Hash
            Tables, Graphs, Stacks, and Trees.{" "}
          </li>
          <li>Agile/SCRUM Methodologies</li>
          <li>REST API's with a focus on Express and Flask</li>
          <li>Coding Best Practices</li>
        </ul>
        <p className="school-name">Texas State University</p>
        <p className="school-dates">
          <i>Graduated 2010 - B.A. in English</i>
        </p>
        <ul className="responsibilities-list">
          <hr className="education-linebreak"></hr>
          <li>
            Majored in English
          </li>
          <li>Minor in Media Studies </li>
          <li>Member of the Texas State Fencing Club</li>
        </ul>
      </div>
    </div>
  );
}

export default Education