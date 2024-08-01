import PropTypes from 'prop-types';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';
import LanguageButton from '../components/LanguageButton';
import { useContext } from 'react';
import { TranslationContext } from '../i18n/TranslationContext';
import MainMenu from './MainMenu';

const MobileMenu = () => {
  const { language, setLanguage } = useContext(TranslationContext);

  return (
    <>
      <LanguageButton language={language} setLanguage={setLanguage} />
      <nav className="mobile-menu">
        <MainMenu />
        <div id="contact">
          <a href="https://www.linkedin.com/in/mati-fernandez/" target="blank">
            <img className="contact-img" src={linkedin} alt="linkedin" />
          </a>
          <a href="https://github.com/mati-fernandez" target="_blank">
            <img className="contact-img" src={github} alt="github" />
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
