/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from 'react';
import translations from './index';
import { useNavigate } from 'react-router-dom';

export const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState('');
  const navigate = useNavigate();
  const [fromLanguageBtn, setFromLanguageBtn] = useState(false);

  useEffect(() => {
    const pathParts = location.hash.split('/').filter(Boolean);
    let URLlang = '';
    if (pathParts.includes('es')) {
      URLlang = 'es';
    } else if (pathParts.includes('en')) {
      URLlang = 'en';
    } else if (pathParts.includes('pt') || pathParts.includes('br')) {
      URLlang = 'pt';
    }

    if (!URLlang) {
      const userLanguage = navigator.language || navigator.userLanguage;
      console.log('Idioma detectado:', userLanguage); // Para verificar qué idioma se está detectando
      const detectedLanguage = userLanguage.startsWith('es')
        ? 'es'
        : userLanguage.startsWith('pt')
        ? 'pt'
        : 'en';
      const newPath = `/${detectedLanguage}/${pathParts.slice(2).join('/')}`;
      navigate(newPath, { replace: true });
      setLanguage(detectedLanguage);
    } else if (!language) {
      setLanguage(URLlang);
      const newPath = `/${language}/${pathParts.slice(2).join('/')}`;
      navigate(newPath, { replace: true });
    } else if (language && URLlang !== language && fromLanguageBtn) {
      const newPath = `/${language}/${pathParts.slice(2).join('/')}`;
      navigate(newPath, { replace: true });
    } else {
      setLanguage(URLlang);
    }
  }, [navigate, language]);

  const translate = (key) => {
    return (
      key
        .split('.')
        .reduce((acc, part) => acc && acc[part], translations[language]) || key
    );
  };

  return (
    <TranslationContext.Provider
      value={{
        translate,
        setLanguage,
        language,
        fromLanguageBtn,
        setFromLanguageBtn,
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
};
