/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from 'react';
import { TranslationContext } from '../i18n/TranslationContext';

const LanguageButton = () => {
  const { language, setLanguage, setFromLanguageBtn } =
    useContext(TranslationContext);
  const [iconLabel, setIconLabel] = useState(language);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIconLabel(language);
      clearTimeout(timeout);
    }, 600);
  }, [language]);

  const handleClick = () => {
    setFromLanguageBtn(true);
    language === 'es' ? setLanguage('en') : setLanguage('es');
    const timeout = setTimeout(() => {
      language === 'es' ? setIconLabel('en') : setIconLabel('es');
      clearTimeout(timeout);
    }, 600);
  };

  return (
    <button className="button" id="language-btn" onClick={handleClick}>
      {iconLabel.toUpperCase()}
    </button>
  );
};

export default LanguageButton;
