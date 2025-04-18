/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { TranslationContext } from '../context/contexts';
import { useNavigate } from 'react-router-dom';

const LanguageButton = () => {
  const { language, setLanguage, setFromLanguageBtn } =
    useContext(TranslationContext);
  const navigate = useNavigate();

  const handleLanguageChange = (event) => {
    const pathParts = location.hash.split('/').filter(Boolean);
    const newLanaguage = event.target.value;
    setFromLanguageBtn(true);
    setLanguage(newLanaguage);
    localStorage.setItem('language', newLanaguage);
    const newPath = `/${newLanaguage}/${pathParts.slice(2).join('/')}`;
    navigate(newPath, { replace: true });
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
