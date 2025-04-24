import { NavLink } from "react-router-dom";
import { TranslationContext } from "../context/contexts";
import { useContext } from "react";

// eslint-disable-next-line react/prop-types
const MainMenu = ({ setFromMenuBtn }) => {
  const { translate, language } = useContext(TranslationContext);

  const handleClick = () => {
    if (setFromMenuBtn) setFromMenuBtn(true);
  };

  const baseClasses =
    "bg-none p-0 font-[inherit] h-fit rounded-none  flex h-[100%] flex-col justify-center text-inherit no-underline mx-[6vw] my-[2vh] cursor-pointer rounded-none border-none bg-transparent p-[2vh] landscape:text-[0.8rem] landscape:m-0";
  const activeClasses = "active-button";

  return (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${baseClasses} ${activeClasses}` : baseClasses
        }
        to={`/${language}/home`}
        onClick={handleClick}
      >
        {translate("menu.home")}
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${baseClasses} ${activeClasses}` : baseClasses
        }
        to={`/${language}/skills`}
        onClick={handleClick}
      >
        {translate("menu.skills")}
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "active-button button link"
            : "button link text-general-primary"
        }
        to={`/${language}/projects`}
        onClick={handleClick}
      >
        {translate("menu.projects")}
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "active-button button link" : "button link"
        }
        to={`/${language}/odyssey`}
        onClick={handleClick}
      >
        {translate("menu.odyssey")}
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "active-button button link" : "button link"
        }
        to={`/${language}/certifications`}
        onClick={handleClick}
      >
        {translate("menu.certifications")}
      </NavLink>
    </>
  );
};

export default MainMenu;
