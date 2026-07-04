import React, {createRef, RefObject, useState} from "react";
import "./style.scss";
import Color from "color-thief-react";
import { BASE_URL } from "../../constants/urls";

interface ExperienceCardProps {
  cardInfo: {
    company: string;
    desc: string;
    date: string;
    companylogo: string;
    role: string;
    descBullets?: string[];
  };
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ cardInfo }) => {
  const srcImage = BASE_URL + cardInfo.companylogo
  const [color, setColor] = useState<string>("")
  const imgRef: RefObject<HTMLImageElement> = createRef();

  return (
    <div className="card experience-card">
      <Color src={srcImage} format="hex">
      {({ data }) => {
        data == undefined
        ? setColor("transparent")
        : setColor(data)
          return (
        <div style={{background: color}} className="experience-banner">
          <div className="experience-blurred_div"></div>
          <div className="experience-div-company">
            <h5 className="experience-text-company">{cardInfo.company}</h5>
          </div>

          <img
            crossOrigin={"anonymous"}
            ref={imgRef}
            className="experience-roundedimg"
            src={srcImage}
            alt={cardInfo.company}
          />
        </div>
          )}}
      </Color>
      <div className="experience-text-details">
        <h5 className="experience-text-role">{cardInfo.role}</h5>
        <h5 className="experience-text-date">{cardInfo.date}</h5>
        {cardInfo.desc && <p className="experience-text-desc">{cardInfo.desc}</p>}
        {cardInfo.descBullets && (
          <ul>
            {cardInfo.descBullets.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ExperienceCard;
