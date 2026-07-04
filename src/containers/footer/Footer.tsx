import "./style.scss";
import {Fade} from "react-awesome-reveal";

export default function Footer() {
  return (
    <Fade duration={1000} className="opacity">
      <div className="footer-div">
        <p className="footer-text">Thank you to be here</p>
      </div>
    </Fade>
  );
}
