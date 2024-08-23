/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';
import cv from '../assets/cv.svg';
import LanguageButton from '../components/LanguageButton';
import { useContext } from 'react';
import { TranslationContext } from '../i18n/TranslationContext';
import MainMenu from './MainMenu';

const MobileMenu = ({ aspectRatio, setFromLanguageBtn }) => {
  const { language, setLanguage } = useContext(TranslationContext);

  return (
    <div className="menu">
      <LanguageButton
        language={language}
        setLanguage={setLanguage}
        aspectRatio={aspectRatio}
        setFromLanguageBtn={setFromLanguageBtn}
      />
      <nav id="mobile-main-menu">
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
          <a
            id="cv-mobile-a"
            className="button"
            href="https://drive.google.com/drive/folders/17_6t9pEX7BIkTsfLXCYRqWZuI0Ygty0P?usp=sharing"
            target="_blank"
          >
            <img src={cv} alt="Hoja de vida" />
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
