import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./style.scss";
import ToggleSwitch from "../toggleSwitch/ToggleSwitch";
import StyleContext from "../../global/StyleContext";
import {
  about,
  workExperiences,
  skillsSection,
  gitHubProjects
} from "../../portfolio";

const Header = () => {
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewgitHubProjects = gitHubProjects.display;
  const viewSkills = skillsSection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{about.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">Work Experiences</a>
            </li>
          )}
          {viewgitHubProjects && (
            <li>
              <a href="#gitHubProjects">GitHub Projects</a>
            </li>
          )}
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          <li>
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
