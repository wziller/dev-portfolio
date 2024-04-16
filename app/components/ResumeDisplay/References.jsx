import React from "react";
import ReferenceCard from "./ReferenceCard";
import "./ResumeDisplay.css";

const References = () => {
  const referenceList = [
    {
      name: "Josefa Osorio",
      company: "Affirm",
      position: "Developer Support Engineer II",
      linkedIn: true,
      link: "https://www.linkedin.com/in/josefa-osorio/",
      relationship:
        "I worked with Josefa as a Developer Support Engineer at Affirm. Josefa served as my mentor and collaborator.",
    },
    {
      name: "Ann Donnely",
      company: "Ethyca",
      position: "Operations Manager",
      linkedIn: true,
      link: "https://www.linkedin.com/in/ann-donnelly/",
      relationship:
        " I have known Ann for 3 years. I attended App Academy with Ann, where we worked on multiple projects together. Additionally, after graduation we both work at the company Quesmed as freelancers.",
    },
    {
      name: "Dr. Frank Guerra",
      company: "Cotulla ISD",
      position: "Principal",
      linkedIn: false,
      link: "https://chs.cotullaisd.net/apps/pages/index.jsp?uREC_ID=1754506&type=d&pREC_ID=1935332",
      relationship:
        "I have known Dr. Frank Guerra for 6 years. He was my assistant pricipal when I began teaching in Texas in 2021. Then he served as the Academic Dean overseeing my ork on the master teacher team at Somerset ISD.",
    },
  ];
  return (
    <div className="resume-display-window">
      <div className="display-window-header-wrapper">
        <p className="resume-display-header">References</p>
      </div>
      <div id="references-content-wrapper">
        {referenceList.map((reference) => (
          <ReferenceCard reference={reference} />
        ))}
      </div>
    </div>
  );
};

export default References;
