import React from "react";
import { darkPref } from "../constants/deviceInfo";

interface StyleContextProps {
    isDark: MediaQueryList | boolean,
    changeTheme: () => void; 
}
const StyleContext = React.createContext<StyleContextProps>({
    isDark: darkPref,
    changeTheme: () => {}
});

export const StyleProvider = StyleContext.Provider;
export const StyleConsumer = StyleContext.Consumer;

export default StyleContext;