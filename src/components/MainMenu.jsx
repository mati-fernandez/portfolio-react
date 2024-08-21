import { NavLink } from 'react-router-dom';
import { TranslationContext } from '../i18n/TranslationContext';
import { useContext } from 'react';

// eslint-disable-next-line react/prop-types
const MainMenu = () => {
  const { translate } = useContext(TranslationContext);

  return (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'active-button button link' : 'button link'
        }
        to="/"
      >
        {translate('menu.item1')}
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'active-button button link' : 'button link'
        }
        to="/projects"
      >
        {translate('menu.item2')}
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'active-button button link' : 'button link'
        }
        to="/exercises"
      >
        {translate('menu.item3')}
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'active-button button link' : 'button link'
        }
        to="/certifications"
      >
        {translate('menu.item4')}
      </NavLink>
    </>
  );
};

export default MainMenu;
