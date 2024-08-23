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
        {translate('menu.item1')}
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'active-button button link' : 'button link'
        }
        to={`/${language}/projects`}
      >
        {translate('menu.item2')}
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'active-button button link' : 'button link'
        }
        to={`/${language}/exercises`}
      >
        {translate('menu.item3')}
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'active-button button link' : 'button link'
        }
        to={`/${language}/certifications`}
      >
        {translate('menu.item4')}
      </NavLink>
    </>
  );
};

export default MainMenu;
