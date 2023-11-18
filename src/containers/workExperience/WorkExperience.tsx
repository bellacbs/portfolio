import React, {useContext} from "react";
import "./style.scss";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-awesome-reveal";
import StyleContext from "../../global/StyleContext";
import ExperienceCard from "../../components/experienceCard/ExperieceCard";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  if (workExperiences.display) {
    return (
      <div id="experience">
        <Fade duration={1000} >
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">Experiences</h1>
              <div className="experience-cards-div">
                {workExperiences.experience.map((card, i) => {
                  return (
                    <ExperienceCard
                      key={i}
                      isDark={isDark as boolean}
                      cardInfo={{
                        company: card.company,
                        desc: card.desc as string,
                        date: card.date,
                        companylogo: card.companylogo,
                        role: card.role,
                        descBullets: card.descBullets
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
