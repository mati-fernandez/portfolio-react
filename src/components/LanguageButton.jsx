/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { TranslationContext } from '../i18n/TranslationContext';

const LanguageButton = () => {
  const { language, setLanguage } = useContext(TranslationContext);

  const handleClick = () => {
    language === 'es' ? setLanguage('en') : setLanguage('es');
  };

  return (
    <button id="language-btn" onClick={handleClick}>
      {language.toUpperCase()}
    </button>
  );
};

export default LanguageButton;
