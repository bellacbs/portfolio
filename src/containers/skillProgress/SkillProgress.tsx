import "./style.scss";
import {techStack} from "../../portfolio";
import {Fade} from "react-awesome-reveal";

const SkillsProgress = () => {
  if (techStack.viewSkillBars) {
    return (
      <Fade duration={1000} className="opacity">
        <div className="skills-container">
          <div className="skills-bar">
            <h1 className="skills-heading">Proficiency</h1>
            {techStack.experience.map((exp, i) => {
              const progressStyle = {
                width: exp.progressPercentage
              };
              return (
                <div key={i} className="skill">
                  <p>{exp.Stack}</p>
                  <div className="meter">
                    <span style={progressStyle}></span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}

export default SkillsProgress;
