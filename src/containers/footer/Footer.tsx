import React, {useContext} from "react";
import "./style.scss";
import {Fade} from "react-awesome-reveal";
import StyleContext from "../../global/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade duration={1000}>
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {"Thank you to be here"}
        </p>
      </div>
    </Fade>
  );
}
