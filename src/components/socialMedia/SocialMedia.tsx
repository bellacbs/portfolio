import React, { ReactNode } from "react";
import "./style.scss";
import {socialMedia} from "../../portfolio";

type SocialMediaType = {
    socialMediaName: string,
    href: string,
    fontAwesomeClassname: string,
    socialClass: string
}

const SocialMedia = () => {
  if (!socialMedia.display) {
    return null;
  }
  return (
    <div className="social-media-div">
        {
            socialMedia.data.map(({socialMediaName, href, fontAwesomeClassname, socialClass}: SocialMediaType, index: number): ReactNode => {
                 return (socialMediaName.length > 0 ? (
                    <a
                        key={index}
                        href={href}
                        className={`icon-button ${socialClass}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                      <i className={fontAwesomeClassname}></i>
                      <span></span>
                    </a>
                  ) : null)
            })
        }
    </div>
  );
}

export default SocialMedia;
