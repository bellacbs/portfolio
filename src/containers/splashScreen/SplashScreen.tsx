import {useContext} from "react";
import "./style.scss";
import {about} from "../../portfolio";
import StyleContext from "../../global/StyleContext";

const SplashScreen = () => {
  const {isDark} = useContext(StyleContext);
  return (
    <div className={isDark ? "dark-mode splash-container" : "splash-container"}>
      <div className="splash-title-container">
        <span className="grey-color"> &lt;</span>
        <span className="splash-title">{about.username}</span>
        <span className="grey-color">/&gt;</span>
      </div>
    </div>
  );
}

export default SplashScreen;
