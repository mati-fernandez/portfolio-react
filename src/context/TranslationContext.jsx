/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [translations, setTranslations] = useState(null);
  const [images, setImages] = useState(null);
  const [language, setLanguage] = useState(
    localStorage.getItem('language') ?? ''
  );
  const navigate = useNavigate();
  const [fromLanguageBtn, setFromLanguageBtn] = useState(false);

  // CARGA INICIAL DE IMAGENES CON FETCH
  const loadImages = async () => {
    try {
      const response = await fetch(
        'https://portfolio-4oh.pages.dev/images.json'
      );
      const data = await response.json();
      console.log('Images loaded:', data);
      setImages(data);
      console.log('Images setted:', images);
    } catch (error) {
      console.error('Error al cargar las imágenes:', error);
    }
  };

  // Log cuando translations cambien
  useEffect(() => {
    console.log('Translations updated:', translations);
  }, [translations]);

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const response = await fetch(
          `https://portfolio-4oh.pages.dev/${language}.json`
        );
        const data = await response.json();
        console.log('Translations loaded:', data);
        setTranslations(data);
        console.log('Translations setted:', translations);
      } catch (error) {
        console.error('Error al cargar las traducciones:', error);
        setTranslations({}); // Si falla, asegura un estado vacío
      }
    };
    if (language) {
      loadTranslations();
    }
  }, [language]);

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
  }, [navigate, language]);

  const translate = (key) => {
    return (
      key.split('.').reduce((acc, part) => acc && acc[part], translations) ||
      key
    );
  };

  return (
    <TranslationContext.Provider
      value={{
        images,
        loadImages,
        translate,
        translations,
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
