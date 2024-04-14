import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div id="nav-bar-wrapper">
      <ul id="link-list">
        <li>
          <a href="#Biography">About Me</a>
        </li>
        <li>
          <a href="#Frameworks">Languages & Frameworks</a>
        </li>
        <li>
          <a href="#Projects">Projects</a>
        </li>
        <li>
          <a href="#Resume">Resume</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
        <li>
          <div id="social-links-wrapper">
            <a href="https://github.com/wziller">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
            </a>

            <a href="https://www.linkedin.com/in/william-ziller/">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg" />
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
