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
  isDark: boolean;
}

interface GetDescBulletsProps {
  descBullets?: string[];
  isDark: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ cardInfo, isDark }) => {
  const srcImage = BASE_URL + cardInfo.companylogo
  const [color, setColor] = useState<string>("")
  const imgRef: RefObject<HTMLImageElement> = createRef();

  const GetDescBullets: React.FC<GetDescBulletsProps> = ({descBullets, isDark}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li
            key={i}
            className={isDark ? "subTitle dark-mode-text" : "subTitle"}
          >
            {item}
          </li>
        ))
      : null;
  };

  return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
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
        <h5
          className={
            isDark
              ? "experience-text-role dark-mode-text"
              : "experience-text-role"
          }
        >
          {cardInfo.role}
        </h5>
        <h5
          className={
            isDark
              ? "experience-text-date dark-mode-text"
              : "experience-text-date"
          }
        >
          {cardInfo.date}
        </h5>
        <p
          className={
            isDark
              ? "subTitle experience-text-desc dark-mode-text"
              : "subTitle experience-text-desc"
          }
        >
          {cardInfo.desc}
        </p>
        <ul>
          <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
        </ul>
      </div>
    </div>
  );
}

export default ExperienceCard;
