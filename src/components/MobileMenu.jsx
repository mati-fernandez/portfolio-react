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
    <div className="alpha-bkg">
      <LanguageButton language={language} setLanguage={setLanguage} />
      <nav className="modal menu">
        <MainMenu />
        <div id="contact-wrapper">
          <a
            className="button linkedin-a"
            href="https://www.linkedin.com/in/mati-fernandez/"
            target="blank"
          >
            <img
              className="contact-img linkedin"
              src={linkedin}
              alt="linkedin"
            />
          </a>
          <a
            className="button"
            href="https://github.com/mati-fernandez"
            target="_blank"
          >
            <img className="contact-img" src={github} alt="github" />
          </a>
        </div>
      </nav>
    </div>
  );
};

MobileMenu.propTypes = {
  translate: PropTypes.func.isRequired,
};

export default MobileMenu;
