/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { TranslationContext } from '../context/contexts';

const LanguageButton = () => {
  const { language, setLanguage, setFromLanguageBtn } =
    useContext(TranslationContext);

  const handleLanguageChange = (event) => {
    const newLanaguage = event.target.value;
    setFromLanguageBtn(true);
    setLanguage(newLanaguage);
    localStorage.setItem('language', newLanaguage);
  };

  return (
    <select id="language-btn" value={language} onChange={handleLanguageChange}>
      <option value="es">ES</option>
      <option value="en">EN</option>
      <option value="pt">PT</option>
    </select>
  );
};

export default LanguageButton;
