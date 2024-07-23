/* eslint-disable react/prop-types */
const LanguageButton = ({ language, setLanguage }) => {
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
