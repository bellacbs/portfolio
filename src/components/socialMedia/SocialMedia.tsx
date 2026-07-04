import { ReactNode } from "react";
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
    <div className="social-media-div icon-btn-row">
        {
            socialMedia.data.map(({socialMediaName, href, fontAwesomeClassname}: SocialMediaType, index: number): ReactNode => {
                 return (socialMediaName.length > 0 ? (
                    <a
                        key={index}
                        href={href}
                        aria-label={socialMediaName}
                        className="icon-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                      <i className={fontAwesomeClassname}></i>
                    </a>
                  ) : null)
            })
        }
    </div>
  );
}

export default SocialMedia;
