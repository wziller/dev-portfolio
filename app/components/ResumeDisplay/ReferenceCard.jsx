import React from "react";
import "./References.css"

const ReferenceCard = (props) => {
  const {name, company, position, linkedIn, link, relationship} = props.reference;
  
const linkedInIcon = (
  <img
    className="linkedInIcon-references"
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg"
  />
);

const genericIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 -960 960 960"
    width="24"
  >
    <path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z" />
  </svg>
);
          

  return (
    <div className="reference-card-wrapper">
      <div className="reference-card-header">
        <h4>{name}</h4>
        <div className="position-text-wrapper">
          <p>{`${position} - ${company}`}</p>
          <a target="_blank" href={link}>{linkedIn ? linkedInIcon : genericIcon}</a>
        </div>
      </div>
      <p className="relationship-text">{relationship}</p>
    </div>
  );
};

export default ReferenceCard;
