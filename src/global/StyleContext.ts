import React from "react";
import { darkPref } from "../constants/deviceInfo";
import { Data } from "./types";

interface StyleContextProps {
    isDark: MediaQueryList | boolean,
    changeTheme: () => void;
    gitHubData: Data | string
}
const StyleContext = React.createContext<StyleContextProps>({
    isDark: darkPref,
    changeTheme: () => {},
    gitHubData: ""
});

export const StyleProvider = StyleContext.Provider;
export const StyleConsumer = StyleContext.Consumer;

export default StyleContext;