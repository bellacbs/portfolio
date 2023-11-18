import React, { useEffect, useState } from "react";
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
const Main = () => {
    const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
    const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
    const [isShowingSplash, setIsShowingSplash] =
    useState(splashScreen.enabled);
    useEffect(() => {
    if (isShowingSplash) {
      const splashTimer = setTimeout(
        () => setIsShowingSplash(false),
        splashScreen.duration
      );
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
        <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
          {isShowingSplash?
          <SplashScreen/>
          :
          <>
            <Header/>
            <About/>
            <Skills/>
            <SkillsProgress/>
            <Education/>
            <Footer/>
          </>
          }
        </StyleProvider>
      </div>
      );

}

export default Main