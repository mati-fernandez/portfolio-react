import { Link } from 'react-router-dom';
import { TranslationContext } from '../i18n/TranslationContext';
import { useContext } from 'react';

// eslint-disable-next-line react/prop-types
const MainMenu = ({ setMenuContent }) => {
  const { translate } = useContext(TranslationContext);

  const handleMenuProjects = () => {
    setMenuContent('projects');
  };

  return (
    <>
      <Link className="link" to="/">
        {translate('menu.item1')}
      </Link>
      <a onClick={handleMenuProjects} className="link">
        {translate('menu.item2')}
      </a>
      <Link className="link" to="/certifications">
        {translate('menu.item3')}
      </Link>
      <Link className="link" to="/exercises">
        {translate('menu.item4')}
      </Link>
    </>
  );
};

export default MainMenu;
