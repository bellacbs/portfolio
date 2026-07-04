import {RefObject, createRef} from "react";
import {Fade} from "react-awesome-reveal";
import "./style.scss";
import { BASE_URL } from "../../constants/urls";

export type school = {
  schoolName: string,
  logo: string,
  subHeader: string,
  duration: string
}

const EducationCard = ({ school: education }: { school: school }) => {
  const imgRef: RefObject<HTMLImageElement> = createRef();

  if (!education.logo)
    console.error(`Image of ${name} is missing in education section`);
  return (
    <Fade duration={1000} className="opacity">
      <div className="card education-card">
        {education.logo && (
          <img
            crossOrigin={"anonymous"}
            ref={imgRef}
            className="education-roundedimg"
            src={BASE_URL+education.logo}
            alt={education.schoolName}
          />
        )}
        <div className="education-card-right">
          <h5 className="education-text-school">{education.schoolName}</h5>
          <p className="education-text-subHeader">{education.subHeader}</p>
          <p className="education-text-duration">{education.duration}</p>
        </div>
      </div>
    </Fade>
  );
}

export default EducationCard;
