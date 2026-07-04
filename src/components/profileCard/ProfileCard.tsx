import React from "react";
import "./style.scss";
import SocialMedia from "../socialMedia/SocialMedia";
import {contactInfo, isHireable} from "../../portfolio";
import emoji from "react-easy-emoji";
import {Fade} from "react-awesome-reveal";

type UserProfileProps = {
  user: User
}

export type User = {
  name: string;
  bio: string;
  avatarUrl: string;
  location: string;
  hireable?: string
}

const ProfileCard: React.FC<UserProfileProps> = ({user}) => {
  user.hireable = isHireable ? "Yes" : "No";
  return (
    <Fade duration={1000} className="opacity">
      <div className="section" id="contact">
        <div className="wrap">
          <div className="section-head">
            <span className="section-label purple">Get in touch</span>
            <h2>Reach Out to me!</h2>
            <p>{contactInfo.subtitle}</p>
          </div>
          <div className="card profile-card">
            <img src={user.avatarUrl} alt={user.name} className="profile-image" />
            <div className="profile-content">
              <p className="bio-text">"{emoji(String(user.bio))}"</p>
              {user.location !== null && (
                <div className="location-div">
                  <svg
                    viewBox="-0.5 -2 20 19"
                    version="1.1"
                    width="18"
                    height="14"
                    aria-hidden="true"
                    stroke="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
                    ></path>
                  </svg>
                  <span>{user.location}</span>
                </div>
              )}
              <p className="opp-div">Open for opportunities: {user.hireable}</p>
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default ProfileCard;
