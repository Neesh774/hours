import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  lightTheme,
  darkTheme,
  Provider,
  SSRProvider,
} from "@adobe/react-spectrum";
import { ThemeContext } from "../utils/theme-context";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("light");

  return (
    <SSRProvider>
      <Provider theme={theme == "light" ? lightTheme : darkTheme}>
        <ThemeContext.Provider
          value={{
            theme,
            toggleTheme: () => setTheme(theme == "light" ? "dark" : "light"),
          }}
        >
          <Component {...pageProps} />
        </ThemeContext.Provider>
      </Provider>
    </SSRProvider>
  );
}
