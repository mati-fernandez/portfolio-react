/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/contexts";
import Sun from "../assets/Sun";
import Moon from "../assets/Moon";

const ThemeButton = ({ className = "" }) => {
  const { theme, setTheme, setFromThemeBtn } = useContext(ThemeContext);
  const [icon, setIcon] = useState(theme === "dark" ? <Sun /> : <Moon />);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIcon(theme === "dark" ? <Sun /> : <Moon />);
    }, 600);

    localStorage.setItem("theme", theme);

    return () => clearTimeout(timeout);
  }, [theme]);

  const handleClick = () => {
    const header =
      document.querySelector("#desktop-header") ??
      document.querySelector("#mobile-header");
    document.querySelector("body").style.transition =
      "background-color 0.8s ease-in-out, font-weight 0.8s ease-in-out";
    header.style.transition =
      "background-color 0.8s ease-in-out, font-weight 0.8s ease-in-out";
    setTheme(theme === "light" ? "dark" : "light");
    setFromThemeBtn(true);
  };

  return (
    <a
      className={`${className} pointer-events-auto fixed z-10 landscape:static`}
      onClick={handleClick}
      id="theme-btn"
    >
      {icon}
    </a>
  );
};

export default ThemeButton;
