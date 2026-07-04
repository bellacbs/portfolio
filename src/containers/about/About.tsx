import {Fade} from "react-awesome-reveal";
import "./style.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {about, isHireable, techCareerStartYear, heroFacets} from "../../portfolio";

const yearsOfExperience = new Date().getFullYear() - techCareerStartYear;

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
    <circle cx="12" cy="12" r="10" />
    <path d="M8 12l2.5 2.5L16 9" />
  </svg>
);

const About = () => {
  if (!about.displayAbout) {
    return null;
  }
  return (
    <Fade duration={1000} className="opacity">
      <div className="about-main" id="about">
        <div className="wrap">
          <div className="eyebrow">
            <CheckIcon />
            {isHireable ? "Available for new projects" : "Not currently available"}
          </div>
          <h1 className="about-text">{about.title}</h1>
          <p className="about-text-p">{about.subTitle}</p>

          <div className="button-about-div">
            <Button text="Contact me" href="#contact" className="btn-primary" />
            {about.resumeLink && (
              <Button
                text="See my resume"
                newTab={true}
                href={about.resumeLink}
                className="btn-secondary"
              />
            )}
          </div>

          <div className="trust-row">
            <span><CheckIcon />{yearsOfExperience}+ years of experience</span>
            <span><CheckIcon />Full Stack, end to end</span>
            <span><CheckIcon />Web, mobile & cloud</span>
          </div>

          <div className="hero-visual">
            {heroFacets.map((facet, i) => (
              <div className={`id-card card ${i === heroFacets.length - 1 ? "front" : i === 0 ? "back" : "mid"}`} key={facet.role}>
                <div className="id-row">
                  <div className="id-avatar" />
                  <div>
                    <div className="id-name">{about.username}</div>
                    <div className="id-role">{facet.role}</div>
                  </div>
                </div>
                <div className="id-tags">
                  {facet.tags.map((tag, j) => (
                    <span className={`id-tag ${["b", "p", "u"][j % 3]}`} key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <SocialMedia />
        </div>
      </div>
    </Fade>
  );
}

export default About
