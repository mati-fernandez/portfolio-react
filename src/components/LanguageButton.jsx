/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import { TranslationContext } from '../i18n/TranslationContext';

const LanguageButton = ({ aspectRatio, setFromLanguageBtn }) => {
  const { language, setLanguage } = useContext(TranslationContext);
  const [iconLabel, setIconLabel] = useState(language);
  console.log('Desde btn language iconLabel', iconLabel);

  const handleClick = () => {
    if (aspectRatio === 'portrait') setFromLanguageBtn(true);
    language === 'es' ? setLanguage('en') : setLanguage('es');
    const timeout = setTimeout(() => {
      language === 'es' ? setIconLabel('en') : setIconLabel('es');
      console.log('Desde btn language iconLabel y el timeout', iconLabel);
      clearTimeout(timeout);
    }, 600);
  };

  return (
    <a className="button" id="language-btn" onClick={handleClick}>
      {iconLabel.toUpperCase()}
    </a>
  );
};

export default LanguageButton;
