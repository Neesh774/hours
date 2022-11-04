import { defaultTheme } from "@adobe/react-spectrum";
import React from "react";

export const ThemeContext = React.createContext({
    theme: "default",
    toggleTheme: () => { },
});