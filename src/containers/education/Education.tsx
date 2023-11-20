import "./style.scss";
import EducationCard, { school } from "../../components/educationCard/EducationCard";
import {educationInfo} from "../../portfolio";


const Education = () => {
  if (educationInfo.display) {
    return (
      <div className="education-section" id="education">
        <h1 className="education-heading">Education</h1>
        <div className="education-card-container">
          {educationInfo.schools.map((school: school, index: number) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}

export default Education;
