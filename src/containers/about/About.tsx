import React, {useContext} from "react";
import {Fade} from "react-awesome-reveal";
import emoji from "react-easy-emoji";
import "./style.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {about} from "../../portfolio";
import StyleContext from "../../global/StyleContext";

const About = () => {
  const {isDark} = useContext(StyleContext);
  if (!about.displayAbout) {
    return null;
  }
  return (
    <Fade duration={1000}>
      <div className="about-main" id="about">
        <div className="about-main-container">
          <div className="about-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode about-text" : "about-text subTitle"}
              >
                {" "}
                {about.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode about-text-p"
                    : "about-text-p subTitle"
                }
              >
                {about.subTitle}
              </p>
              <SocialMedia />
              <div className="button-about-div">
                <Button text="Contact me" href="#contact" />
                {about.resumeLink && (
                  <Button
                    text="See my resume"
                    newTab={true}
                    href={about.resumeLink}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default About
