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
  if (isHireable) {
    user.hireable = "Yes";
  } else {
    user.hireable = "No";
  }
  return (
    <Fade duration={1000} className="opacity">
      <div className="main" id="contact">
        <h1 className="prof-title">Reach Out to me!</h1>
        <div className="row">
          <div className="main-content-profile">
            <div className="blog-header">
              <p className="subTitle blog-subtitle">{contactInfo.subtitle}</p>
            </div>
            <h2 className="bio-text">"{emoji(String(user.bio))}"</h2>
            {user.location !== null && (
              <div className="location-div">
                <span className="desc-prof">
                  <svg
                    viewBox="-0.5 -2 20 19"
                    version="1.1"
                    width="22"
                    height="16"
                    aria-hidden="true"
                    stroke="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
                    ></path>
                  </svg>
                  {user.location}
                </span>
              </div>
            )}
            <div className="opp-div">
              <span className="desc-prof">
                Open for opportunities: {user.hireable}
              </span>
            </div>
            <SocialMedia />
          </div>
          <div className="image-content-profile">
            <img
              src={user.avatarUrl}
              alt={user.name}
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default ProfileCard;
