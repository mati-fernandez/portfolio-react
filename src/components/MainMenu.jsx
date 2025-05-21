import { NavLink } from "react-router-dom";
import { TranslationContext, PageContext } from "../context/contexts";
import { useContext } from "react";

// eslint-disable-next-line react/prop-types
const MainMenu = () => {
  const { translate, language } = useContext(TranslationContext);
  const { setShowMenu } = useContext(PageContext);

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
        <NavLink
          key={path}
          to={`/${language}/${path}`}
          onClick={handleClick}
          className={({ isActive }) =>
            `landscape:hover:bg-general-primary mx-10 flex cursor-pointer flex-col justify-center rounded-full p-4 text-inherit no-underline landscape:m-0 landscape:border-none ${isActive ? "border-general-primary-alpha bg-background-primary border-2 border-solid landscape:border-solid" : ""}`
          }
        >
          {translate(label)}
        </NavLink>
      ))}
    </>
  );
};

export default MainMenu;
