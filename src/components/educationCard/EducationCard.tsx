import {RefObject, createRef, useContext} from "react";
import {Fade, Slide} from "react-awesome-reveal";
import "./style.scss";
import StyleContext from "../../global/StyleContext";
import { BASE_URL } from "../../constants/urls";

export type school = {
  schoolName: string,
  logo: string,
  subHeader: string,
  duration: string
}

const EducationCard = ({ school: education }: { school: school }) => {
  const {isDark} = useContext(StyleContext);
  const imgRef: RefObject<HTMLImageElement> = createRef();

  if (!education.logo)
    console.error(`Image of ${name} is missing in education section`);
  return (
    <div>
      <Fade duration={1000} className="opacity">
        <div className="education-card">
          {education.logo && (
            <div className="education-card-left">
              <img
                crossOrigin={"anonymous"}
                ref={imgRef}
                className="education-roundedimg"
                src={BASE_URL+education.logo}
                alt={education.schoolName}
              />
            </div>
          )}
          <div className="education-card-right">
            <h5 className="education-text-school">{education.schoolName}</h5>

            <div className="education-text-details">
              <h5
                className={
                  isDark
                    ? "dark-mode education-text-subHeader"
                    : "education-text-subHeader"
                }
              >
                {education.subHeader}
              </h5>
              <p
                className={`${
                  isDark ? "dark-mode" : ""
                } education-text-duration`}
              >
                {education.duration}
              </p>
            </div>
          </div>
        </div>
      </Fade>
      <Slide duration={2000}>
        <div className="education-card-border"></div>
      </Slide>
    </div>
  );
}

export default EducationCard;
