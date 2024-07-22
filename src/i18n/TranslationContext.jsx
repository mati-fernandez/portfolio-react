import { createContext, useContext, useState } from 'react';
import translations from './index';

const TranslationContext = createContext();

// eslint-disable-next-line react/prop-types
export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');

  const translate = (key) => {
    return translations[language][key] || key;
  };

  return (
    <TranslationContext.Provider value={{ translate, setLanguage, language }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);
