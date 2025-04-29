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
    setIcon(theme === "dark" ? <Sun /> : <Moon />);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleClick = () => {
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
