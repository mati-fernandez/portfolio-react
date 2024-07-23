import { useContext, useEffect } from 'react';
import { TranslationContext } from '../i18n/TranslationContext';

const LanguageSetup = () => {
  const { setLanguage } = useContext(TranslationContext);

  useEffect(() => {
    const userLanguage = navigator.language || navigator.userLanguage;
    const detectedLanguage = userLanguage.startsWith('es') ? 'es' : 'en';
    setLanguage(detectedLanguage);
  }, [setLanguage]);

  return null; // Este componente no necesita renderizar nada
};

export default LanguageSetup;
