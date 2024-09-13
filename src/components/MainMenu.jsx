import { NavLink } from 'react-router-dom';
import { TranslationContext } from '../i18n/TranslationContext';
import { useContext } from 'react';

// eslint-disable-next-line react/prop-types
const MainMenu = () => {
  const { translate, language } = useContext(TranslationContext);

  return (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'active-button button link' : 'button link'
        }
        to={`/${language}/home`}
      >
        {translate('menu.home')}
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'active-button button link' : 'button link'
        }
        to={`/${language}/skills`}
      >
        {translate('menu.skills')}
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'active-button button link' : 'button link'
        }
        to={`/${language}/projects`}
      >
        {translate('menu.projects')}
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'active-button button link' : 'button link'
        }
        to={`/${language}/exercises`}
      >
        {translate('menu.exercises')}
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'active-button button link' : 'button link'
        }
        to={`/${language}/certifications`}
      >
        {translate('menu.certifications')}
      </NavLink>
    </>
  );
};

export default MainMenu;
