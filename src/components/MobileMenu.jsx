import PropTypes from 'prop-types';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';
import LanguageButton from '../components/LanguageButton';
import { useContext } from 'react';
import { TranslationContext } from '../i18n/TranslationContext';
import { Link } from 'react-router-dom';

const MobileMenu = () => {
  const { language, setLanguage, translate } = useContext(TranslationContext);

  return (
    <>
      <LanguageButton language={language} setLanguage={setLanguage} />
      <nav id="mobile-menu">
        <Link className="link" to="/">
          {translate('menu.item1')}
        </Link>
        <Link className="link" to="/projects">
          {translate('menu.item2')}
        </Link>
        <Link className="link" to="/certifications">
          {translate('menu.item3')}
        </Link>
        <Link className="link" to="/exercises">
          {translate('menu.item4')}
        </Link>
        <div id="contacto">
          <a href="https://www.linkedin.com/in/mati-fernandez/" target="blank">
            <img className="contacto" src={linkedin} alt="linkedin" />
          </a>
          <a href="https://github.com/mati-fernandez" target="_blank">
            <img className="contacto" src={github} alt="github" />
          </a>
        </div>
      </nav>
    </>
  );
};

MobileMenu.propTypes = {
  translate: PropTypes.func.isRequired,
};

export default MobileMenu;
