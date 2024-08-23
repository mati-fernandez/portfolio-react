import { createContext, useEffect, useState } from 'react';
import translations from './index';
import { useNavigate } from 'react-router-dom';

export const TranslationContext = createContext();

// eslint-disable-next-line react/prop-types
export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const pathParts = location.hash.split('/').filter(Boolean);
    let URLlang = '';
    if (pathParts.includes('es')) {
      URLlang = 'es';
    } else if (pathParts.includes('en')) {
      URLlang = 'en';
    }

    console.log('location.hash', location.hash);
    console.log('pathParts', pathParts);
    console.log('URLlang', URLlang);
    if (!URLlang) {
      console.log('Entró al no hay URLlang');
      const userLanguage = navigator.language || navigator.userLanguage;
      const detectedLanguage = userLanguage.startsWith('es') ? 'es' : 'en';

      // Conservar el path original y redirigir con el idioma detectado
      const newPath = `/${detectedLanguage}/${pathParts.slice(2).join('/')}`;
      navigate(newPath, { replace: true });
      console.log('language', language);
      setLanguage(detectedLanguage);
    } else if (!language) {
      console.log('Entró al SI ! Hay URLlang y no hay language');
      setLanguage(URLlang);
    } else if (language && URLlang !== language) {
      console.log('Entró al SI ! Hay language y URLlanguage !== language');
      // Si hay una discrepancia entre `language` y el idioma en la URL, corregir la URL
      const newPath = `/${language}/${pathParts.slice(2).join('/')}`;
      navigate(newPath, { replace: true });
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
    <TranslationContext.Provider value={{ translate, setLanguage, language }}>
      {children}
    </TranslationContext.Provider>
  );
};
