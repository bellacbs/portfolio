import React from "react";
import { Data } from "./types";

interface StyleContextProps {
    gitHubData: Data | string
}
const StyleContext = React.createContext<StyleContextProps>({
    gitHubData: ""
});

export const StyleProvider = StyleContext.Provider;
export const StyleConsumer = StyleContext.Consumer;

export default StyleContext;
