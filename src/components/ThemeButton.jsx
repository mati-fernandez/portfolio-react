/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/contexts";
import { motion, useAnimation } from "motion/react";
import Sun from "../assets/Sun";
import Moon from "../assets/Moon";

const ThemeButton = ({ className = "" }) => {
  const { theme, setTheme, setFromThemeBtn } = useContext(ThemeContext);

  const controls = useAnimation();

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
  }, [theme]);

  const handleClick = () => {
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
    setTheme(theme === "light" ? "dark" : "light");
    setFromThemeBtn(true);
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
      className={`${className} pointer-events-auto absolute top-0 left-0 z-10 mx-[6vw] my-[2vh] flex cursor-pointer p-[2vh] landscape:static`}
      onClick={handleClick}
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </motion.button>
  );
};

export default ThemeButton;
