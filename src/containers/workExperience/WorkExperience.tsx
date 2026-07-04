import "./style.scss";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-awesome-reveal";
import ExperienceCard from "../../components/experienceCard/ExperieceCard";

export default function WorkExperience() {
  if (workExperiences.display) {
    return (
      <div className="section" id="experience">
        <Fade duration={1000} className="opacity">
          <div className="wrap">
            <div className="section-head">
              <span className="section-label pink">Career</span>
              <h2>Experiences</h2>
            </div>
            <div className="experience-cards-div">
              {workExperiences.experience.map((card, i) => {
                return (
                  <ExperienceCard
                    key={i}
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
        </Fade>
      </div>
    );
  }
  return null;
}
