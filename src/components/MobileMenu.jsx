import PropTypes from 'prop-types';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';
import LanguageButton from '../components/LanguageButton';
import { useContext, useState } from 'react';
import { TranslationContext } from '../i18n/TranslationContext';
import MainMenu from './MainMenu';
import ProjectsMenu from './ProjectsMenu';

const MobileMenu = () => {
  const { language, setLanguage } = useContext(TranslationContext);
  const [menuContent, setMenuContent] = useState('main');

  return (
    <>
      <LanguageButton language={language} setLanguage={setLanguage} />
      <nav id="mobile-menu">
        {menuContent === 'main' ? (
          <MainMenu setMenuContent={setMenuContent} />
        ) : (
          <ProjectsMenu setMenuContent={setMenuContent} />
        )}
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
