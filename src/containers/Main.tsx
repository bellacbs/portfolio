import { useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { splashScreen } from "../portfolio";
import "./Main.scss";
import { StyleProvider } from "../global/StyleContext";
import SplashScreen from "./splashScreen/SplashScreen";
import Header from "../components/header/Header";
import About from "./about/About";
import Skills from "./skills/Skills";
import Education from "./education/Education";
import SkillsProgress from "./skillProgress/SkillProgress";
import Footer from "./footer/Footer";
import ScrollToTop from "../components/topButton/TopButton";
import WorkExperience from "./workExperience/WorkExperience";
import GitHub from "./gitHub/GitHub";
import Profile from "./profile/Profile";
import { Data } from "../global/types";
import { getRepositoryData } from "../utils/getRepositoryData";

const Main = () => {
    const [isDark, setIsDark] = useLocalStorage("isDark", false);
    const [isShowingSplash, setIsShowingSplash] =
    useState(splashScreen.enabled);
    const [gitHubData, setGitHubData] = useState<Data | string>("");
    useEffect(() => {  
    if (isShowingSplash) {
      const splashTimer = setTimeout(
        () => setIsShowingSplash(false),
        splashScreen.duration
      );
      getRepositoryData(setGitHubData)
      return () => {
        clearTimeout(splashTimer);
      };
    }
    }, []);

    const changeTheme = (): void => {
        setIsDark(!isDark);
    };

    return (
      <div className={isDark ? "dark-mode" : "global"}>
        <StyleProvider value={{isDark: isDark, changeTheme: changeTheme, gitHubData: gitHubData, }}>
          {isShowingSplash?
          <SplashScreen/>
          :
          <>
            <Header/>
            <About/>
            <Skills/>
            <SkillsProgress/>
            <Education/>
            <WorkExperience/>
            <GitHub/>
            <Profile/>
            <Footer/>
            <ScrollToTop/>
          </>
          }
        </StyleProvider>
      </div>
      );

}

export default Main