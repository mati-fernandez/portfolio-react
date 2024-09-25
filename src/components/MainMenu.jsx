import { NavLink } from 'react-router-dom';
import { TranslationContext } from '../i18n/TranslationContext';
import { TooltipContext } from '../context/TooltipContext';
import { useContext } from 'react';
import Tooltip from './Tooltip';

// eslint-disable-next-line react/prop-types
const MainMenu = ({ setFromMenuBtn, aspectRatio }) => {
  const { translate, language } = useContext(TranslationContext);
  const { handleMouseEnter, handleMouseLeave, handleMouseMove } =
    useContext(TooltipContext);

  const handleClick = () => {
    setFromMenuBtn(true);
  };

  return (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'active-button button link' : 'button link'
        }
        to={`/${language}/home`}
        onClick={handleClick}
      >
        {translate('menu.home')}
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'active-button button link' : 'button link'
        }
        to={`/${language}/skills`}
        onClick={handleClick}
      >
        {translate('menu.skills')}
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'active-button button link' : 'button link'
        }
        to={`/${language}/projects`}
        onClick={handleClick}
      >
        {translate('menu.projects')}
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'active-button button link' : 'button link'
        }
        to={`/${language}/exercises`}
        onClick={handleClick}
        onMouseEnter={(e) =>
          handleMouseEnter(e, translate('exercises.tooltip'))
        }
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        {translate('menu.exercises')}
      </NavLink>
      <Tooltip aspectRatio={aspectRatio} />
      <NavLink
        className={({ isActive }) =>
          isActive ? 'active-button button link' : 'button link'
        }
        to={`/${language}/certifications`}
        onClick={handleClick}
      >
        {translate('menu.certifications')}
      </NavLink>
    </>
  );
};

export default MainMenu;
