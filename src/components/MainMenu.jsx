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
    "p-0 font-[inherit] rounded-none  flex h-[100%] flex-col justify-center text-inherit no-underline mx-[6vw] my-[2vh] cursor-pointer rounded-none border-none p-[2vh] landscape:m-0 landscape:hover:bg-general-primary";
  const activeClasses = "bg-primary primary";

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
          isActive ? `${baseClasses} ${activeClasses}` : baseClasses
        }
        to={`/${language}/projects`}
        onClick={handleClick}
      >
        {translate("menu.projects")}
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${baseClasses} ${activeClasses}` : baseClasses
        }
        to={`/${language}/odyssey`}
        onClick={handleClick}
      >
        {translate("menu.odyssey")}
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${baseClasses} ${activeClasses}` : baseClasses
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
