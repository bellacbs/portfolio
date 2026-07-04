import "./style.scss";
import {about} from "../../portfolio";

const SplashScreen = () => {
  return (
    <div className="splash-container">
      <div className="splash-title-container">
        {about.username.split(" ")[0]}
        <span className="grey-color">.</span>
        {about.username.split(" ").slice(1).join(" ")}
      </div>
    </div>
  );
}

export default SplashScreen;
