import Headroom from "react-headroom";
import "./style.scss";
import {
  about,
  workExperiences,
  skillsSection,
  gitHubProjects
} from "../../portfolio";
import { useScrollSpy } from "../../hooks/useScrollSpy";

const Header = () => {
  const viewExperience = workExperiences.display;
  const viewgitHubProjects = gitHubProjects.display;
  const viewSkills = skillsSection.display;

  const navIds = [
    ...(viewSkills ? ["skills"] : []),
    ...(viewExperience ? ["experience"] : []),
    ...(viewgitHubProjects ? ["gitHubProjects"] : []),
    "contact"
  ];
  const activeId = useScrollSpy(navIds);

  return (
    <Headroom>
      <header className="header">
        <a href="/" className="logo">
          {about.username.split(" ")[0]}
          <span className="grey-color">.</span>
          {about.username.split(" ").slice(1).join(" ")}
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          {viewSkills && (
            <li>
              <a href="#skills" className={activeId === "skills" ? "active" : ""}>
                Skills
              </a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience" className={activeId === "experience" ? "active" : ""}>
                Work Experiences
              </a>
            </li>
          )}
          {viewgitHubProjects && (
            <li>
              <a
                href="#gitHubProjects"
                className={activeId === "gitHubProjects" ? "active" : ""}
              >
                GitHub Projects
              </a>
            </li>
          )}
          <li>
            <a href="#contact" className={`nav-cta ${activeId === "contact" ? "active" : ""}`}>
              Contact Me
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
