/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { ReactNode, useEffect, useState } from "react";
import { ThemeContext } from "./contexts";
import type { Styles } from "./contexts.d";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
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
  const [styles, setStyles] = useState<Styles>({
    fontSize: "3.5vmin",
    fontSizeLandscape: "calc((1vw + 1vh) * 0.8)",
    fontSizePortrait: "calc((1vw + 1vh) * 1.2)",
    colorGeneralPrimary: "rgb(76, 150, 199)",
    colorGeneralPrimaryAlpha: "rgba(76, 150, 199, 0.363)",
    colorGeneralSecondary: "grey",
    colorGeneralSecondaryAlpha: "#222222c5",
    borderGeneral: "1px solid black",
  });

  const removeInlineStyles = () => {
    const body = document.querySelector("body");
    if (body) {
      body.removeAttribute("style");
    }
  };

  useEffect(() => {
    removeInlineStyles();
  }, []);

  useEffect(() => {
    const dynamicStyles: Styles =
      theme === "dark"
        ? {
            colorBoxShadow: "#737d60",
            colorPrimary: "white",
            colorSecondary: "#3b3b3b",
            colorTertiary: "#394733",
            colorSecondaryAlpha: "#939e8f80",
            colorBackground: "black",
            colorBackgroundSecondary: "#222",
            colorBackgroundAlpha: "#2e312bec",
            colorBackgroundAlphaSecondary: "#222222ce",
            border: "1px solid var(--color-primary)",
            iconFill: "white",
            titleColor: "white",
            h3FontWeight: "400",
            fontWeight: "400",
          }
        : {
            colorBoxShadow: "#424739",
            colorPrimary: "#000",
            colorSecondary: "#d3d2d2",
            colorTertiary: "#c4e3b8",
            colorSecondaryAlpha: "#89a18480",
            colorBackground: "rgb(233, 233, 233)",
            colorBackgroundSecondary: "#fff",
            colorBackgroundAlpha: "#ffffffec",
            colorBackgroundAlphaSecondary: "#d8d8d8ce",
            border: "1px solid var(--color-primary)",
            iconFill: "black",
            titleColor: "dark",
            h3FontWeight: "600",
            fontWeight: "500",
          };

    setStyles((prev) => ({ ...prev, ...dynamicStyles }));
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        fromThemeBtn,
        setFromThemeBtn,
        styles,
        setStyles,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
