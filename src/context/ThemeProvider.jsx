/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { ThemeContext } from "./contexts";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      return savedTheme;
    }

    const isLightMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches;

    return isLightMode ? "light" : "dark";
  });
  const [fromThemeBtn, setFromThemeBtn] = useState(false);

  const removeInlineStyles = () => {
    const body = document.querySelector("body");
    if (body) {
      body.removeAttribute("style");
    }
  };

  const [hasAnimatedHeader, setHasAnimatedHeader] = useState(false);

  useEffect(() => {
    removeInlineStyles();
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        fromThemeBtn,
        setFromThemeBtn,
        hasAnimatedHeader,
        setHasAnimatedHeader,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
