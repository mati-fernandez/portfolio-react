/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { ThemeContext } from "./contexts";

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
      theme === "dark"
        ? (body.style.backgroundImage = "url(src/assets/bg-dark.webp)")
        : (body.style.backgroundImage = "url(src/assets/bg-light.webp)");
      body.style.backgroundPosition = "center";
    }
  };

  useEffect(() => {
    removeInlineStyles();
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
    theme === "dark"
      ? (body.style.backgroundImage = "url(src/assets/bg-dark.webp)")
      : (body.style.backgroundImage = "url(src/assets/bg-light.webp)");
    body.style.backgroundPosition = "center";
    body.style.backgroundColor = "#777777";
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
