import { Link } from 'react-router-dom';
import { TranslationContext } from '../i18n/TranslationContext';
import { useContext } from 'react';

// eslint-disable-next-line react/prop-types
const MainMenu = () => {
  const { translate } = useContext(TranslationContext);

  return (
    <>
      <Link className="button link" to="/projects">
        {translate('menu.item2')}
      </Link>
      <Link className="button link" to="/certifications">
        {translate('menu.item3')}
      </Link>
      <Link className="button link" to="/exercises">
        {translate('menu.item4')}
      </Link>
      <a
        className="link button"
        href="https://drive.google.com/file/d/17RJxIFZ5QLbsr7GWNuG990xwdhsyyle_/view"
        target="_blank"
      >
        {translate('menu.item1')}
      </a>
    </>
  );
};

export default MainMenu;
