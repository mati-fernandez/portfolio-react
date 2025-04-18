import { useEffect } from 'react';

// hooks/useDetectLanguage.js
export const useDetectLanguage = (language, setLanguage, navigate) => {
  useEffect(() => {
    const pathParts = location.hash.split('/').filter(Boolean);
    let URLlang = '';
    if (pathParts.includes('es')) URLlang = 'es';
    else if (pathParts.includes('en')) URLlang = 'en';
    else if (pathParts.includes('pt') || pathParts.includes('br'))
      URLlang = 'pt';

    if (!URLlang && !language) {
      const userLanguage = navigator.language || navigator.userLanguage;
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
    } else if (language && URLlang !== language) {
      const newPath = `/${language}/${pathParts.slice(2).join('/')}`;
      navigate(newPath, { replace: true });
    } else {
      setLanguage(URLlang);
    }
  }, [navigate, language, setLanguage]);
};
