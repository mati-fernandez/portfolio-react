/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ThemeContext } from "../context/contexts";
import { motion, useAnimation } from "motion/react";
import Sun from "../assets/Sun";
import Moon from "../assets/Moon";

const ThemeButton = ({ className = "" }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const controls = useAnimation();

  const handleClick = () => {
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
    setTheme(theme === "light" ? "dark" : "light");
    controls.start({
      rotate: [0, 720],
      transition: {
        duration: 0.8,
        ease: [0, 0.24, 0.59, 0.92],
      },
    });
  };

  return (
    <motion.button
      animate={controls}
      initial={false}
      className={`${className} pointer-events-auto cursor-pointer`}
      onClick={handleClick}
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </motion.button>
  );
};

export default ThemeButton;
