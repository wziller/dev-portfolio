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
      </ul>
    </div>
  );
};

export default Navbar;
