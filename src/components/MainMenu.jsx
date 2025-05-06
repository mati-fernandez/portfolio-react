import { NavLink } from "react-router-dom";
import { TranslationContext } from "../context/contexts";
import { useContext } from "react";
import { motion } from "motion/react";

// eslint-disable-next-line react/prop-types
const MainMenu = ({ setFromMenuBtn }) => {
  const { translate, language } = useContext(TranslationContext);

  const MotionNavLink = motion(NavLink);

  const handleClick = () => {
    if (setFromMenuBtn) setFromMenuBtn(true);
  };

  const routes = [
    { path: "home", label: "menu.home" },
    { path: "skills", label: "menu.skills" },
    { path: "projects", label: "menu.projects" },
    { path: "odyssey", label: "menu.odyssey" },
    { path: "certifications", label: "menu.certifications" },
  ];

  return (
    <>
      {routes.map(({ path, label }) => (
        <MotionNavLink
          variants={{
            hidden: { y: 0, rotate: 0 },
            visible: {
              y: [0, 20, -12, 10, -3, 0],
              rotate: [0, 1800, 2880, 3960, 3960, 3960],
            },
          }}
          transition={{ duration: 1, ease: [0, 0.75, 0.37, 0.95] }}
          key={path}
          to={`/${language}/${path}`}
          onClick={handleClick}
          className={({ isActive }) =>
            `landscape:hover:bg-general-primary mx-[6vw] my-[2vh] flex h-[100%] cursor-pointer flex-col justify-center rounded-none border-none p-[2vh] font-[inherit] text-inherit no-underline landscape:m-0 ${isActive ? "bg-primary primary" : ""}`
          }
        >
          {translate(label)}
        </MotionNavLink>
      ))}
    </>
  );
};

export default MainMenu;
