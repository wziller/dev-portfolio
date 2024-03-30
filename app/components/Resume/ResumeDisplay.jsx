import React from 'react'
import WorkExperience from './WorkExperience';

const ResumeDisplay = (active) => {
    let displayEl;
    switch (active) {
      case "work":
        displayEl = <WorkExperience/>
        break;
      case "Mangoes":
      case "Papayas":
        console.log("Mangoes and papayas are $2.79 a pound.");
        // Expected output: "Mangoes and papayas are $2.79 a pound."
        break;
      default:
        console.log(`Sorry, we are out of ${expr}.`);
    }

  return (
    <div>
    
        </div>
  )
}

export default ResumeDisplay