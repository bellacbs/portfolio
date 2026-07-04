import "./style.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo} from "../../portfolio";
import {Fade} from "react-awesome-reveal";

export default function Contact() {
  return (
    <Fade duration={1000} className="opacity">
      <div className="section" id="contact">
        <div className="wrap">
          <div className="section-head">
            <span className="section-label purple">Get in touch</span>
            <h2>{contactInfo.title}</h2>
            <p>{contactInfo.subtitle}</p>
          </div>
          <div className="card contact-card">
            <a className="contact-detail-email" href={"mailto:" + contactInfo.email_address}>
              {contactInfo.email_address}
            </a>
            <SocialMedia />
          </div>
        </div>
      </div>
    </Fade>
  );
}
