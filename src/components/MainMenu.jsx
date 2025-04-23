import { NavLink } from "react-router-dom";
import { TranslationContext } from "../context/contexts";
import { useContext } from "react";

// eslint-disable-next-line react/prop-types
const MainMenu = ({ setFromMenuBtn }) => {
  const { translate, language } = useContext(TranslationContext);

  const handleClick = () => {
    if (setFromMenuBtn) setFromMenuBtn(true);
  };

  const baseClasses = "bg-none p-0 font-[inherit] h-fit rounded-none";
  const activeClasses = "active-button";

  return (
    <div className="[&>a]:rounded-none">
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
          isActive ? "active-button button link" : "link"
        }
        to={`/${language}/skills`}
        onClick={handleClick}
      >
        {translate("menu.skills")}
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "active-button button link" : "button link"
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
    </div>
  );
};

export default MainMenu;
