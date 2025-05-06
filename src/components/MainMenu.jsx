import { NavLink } from "react-router-dom";
import { TranslationContext } from "../context/contexts";
import { PageContext } from "../context/contexts";
import { useContext } from "react";
import { motion } from "motion/react";

const itemVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: { duration: 1, ease: [0, 0.75, 0.37, 0.95] },
  },
};

// eslint-disable-next-line react/prop-types
const MainMenu = () => {
  const { translate, language } = useContext(TranslationContext);
  const { setShowMenu } = useContext(PageContext);

  const MotionNavLink = motion.create(NavLink);

  const handleClick = () => {
    setShowMenu(false);
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
          key={path}
          to={`/${language}/${path}`}
          onClick={handleClick}
          className={({ isActive }) =>
            `landscape:hover:bg-general-primary mx-[6vw] my-[2vh] flex h-[100%] cursor-pointer flex-col justify-center rounded-none border-none p-[2vh] font-[inherit] text-inherit no-underline landscape:m-0 ${isActive ? "bg-primary primary" : ""}`
          }
          variants={itemVariants}
        >
          {translate(label)}
        </MotionNavLink>
      ))}
    </>
  );
};

export default MainMenu;
