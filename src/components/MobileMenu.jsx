import PropTypes from 'prop-types';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';
import LanguageButton from '../components/LanguageButton';
import { useContext } from 'react';
import { TranslationContext } from '../i18n/TranslationContext';

const MobileMenu = () => {
  const { language, setLanguage, translate } = useContext(TranslationContext);

  return (
    <>
      <LanguageButton language={language} setLanguage={setLanguage} />
      <nav id="mobile-menu">
        <a>{translate('menu.item1')}</a>
        <a>{translate('menu.item2')}</a>
        <a>{translate('menu.item3')}</a>
        <a>{translate('menu.item4')}</a>
        <div id="contacto">
          <img src={linkedin} alt="linkedin" />
          <img src={github} alt="github" />
        </div>
      </nav>
    </>
  );
};

MobileMenu.propTypes = {
  translate: PropTypes.func.isRequired,
};

export default MobileMenu;
