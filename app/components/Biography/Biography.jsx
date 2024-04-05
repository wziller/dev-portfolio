import React from "react";
import "./Biography.css";

const Biography = () => {
  return (
    <section id="Biography">
      {/* <h2 className="section-header">About Me</h2> */}
      <div id="bio-container">
        <div id="image-wrapper">
          <img
            id="about-me-image"
            src="https://wziller-portfolio.s3.us-east-2.amazonaws.com/about-me-image-3.png"
          />
        </div>
        <div id="bio-text-wrapper">
          <div id="hero-wrapper">
            <h1 className="hero-text">
              &lt; William Ziller - Software Developer/ &gt;
            </h1>
          </div>
          <p id="bio-text">
            Back in 2021, I decided to leave my 10 year career in education and
            try my hand at coding. After a year in coding Bootcamp at App
            Academy, I accepted a position at the buy now pay later online
            finanace company Affirm. Following the passing of my father, I took
            a break for a year to reinvigorate the family business he built,
            Scene in SA Magazine. I most enjoy creating elegant solutions
            through software and contributing to . When I’m not at the computer,
            I’m usually rock climbing, reading, photographing events around our
            city, or building spacecraft in Kerbal Space Program.
          </p>
          <div id="contact-button-wrapper">
            <a id="contact-button" href="#Contact">
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;
