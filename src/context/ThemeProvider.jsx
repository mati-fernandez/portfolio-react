/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { ThemeContext } from "./contexts";
import bgDark from "../assets/bg-dark.webp";
import bgLight from "../assets/bg-light.webp";

export const ThemeProvider = ({ children }) => {
  const body = document.querySelector("body");

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

  const removeInlineStyles = () => {
    if (body) {
      body.removeAttribute("style");
    }
  };

  useEffect(() => {
    removeInlineStyles();
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
    theme === "dark"
      ? (body.style.backgroundImage = `url(${bgDark})`)
      : (body.style.backgroundImage = `url(${bgLight})`);
    body.style.backgroundPosition = "center";
    body.style.backgroundSize = "cover";
    body.style.backgroundRepeat = "no-repeat";
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
