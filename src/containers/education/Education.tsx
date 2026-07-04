import "./style.scss";
import EducationCard, { school } from "../../components/educationCard/EducationCard";
import {educationInfo} from "../../portfolio";


const Education = () => {
  if (educationInfo.display) {
    return (
      <div className="section" id="education">
        <div className="wrap">
          <div className="section-head">
            <span className="section-label purple">Background</span>
            <h2>Education</h2>
          </div>
          <div className="education-card-container">
            {educationInfo.schools.map((school: school, index: number) => (
              <EducationCard key={index} school={school} />
            ))}
          </div>
        </div>
      </div>
    );
  }
  return null;
}

export default Education;
