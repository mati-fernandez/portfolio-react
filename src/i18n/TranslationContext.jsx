import { createContext, useState } from 'react';
import translations from './index';

export const TranslationContext = createContext();

// eslint-disable-next-line react/prop-types
export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');

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
