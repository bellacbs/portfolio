import "./style.scss";
import {skillsSection} from "../../portfolio";
import {Fade} from "react-awesome-reveal";

const Skills= () => {
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className="section" id="skills">
      <div className="wrap">
        <Fade duration={1000} className="opacity">
          <div className="section-head">
            <span className="section-label blue">Approach</span>
            <h2>{skillsSection.title}</h2>
            <p>{skillsSection.subTitle}</p>
          </div>
          <div className="skills-card-row">
            {skillsSection.skills.map((skill, i) => (
              <div className="card skills-card" key={i}>
                <p className="skills-text">{skill}</p>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Skills;
