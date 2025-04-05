/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DevBtn from '../components/DevBtn';

export const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [translations, setTranslations] = useState(null);
  const [images, setImages] = useState(null);
  const [language, setLanguage] = useState(
    localStorage.getItem('language') ?? ''
  );
  const navigate = useNavigate();
  const [fromLanguageBtn, setFromLanguageBtn] = useState(false);
  const [devMode, setDevMode] = useState(false);
  const [endpoint, setEndpoint] = useState('build');
  const [error, setError] = useState(null);

  const contentDevPath = 'http://127.0.0.1:5500/';
  //   const contentDevPathMobile = 'http://192.168.1.100:5500/'; // Acá deberia usar aspectRatio supongo (esta en app ahora) para ver si es mobile y poner ese endpoint
  const contentBuildPath = 'https://portfolio-4oh.pages.dev/';

  const imagesApiEndpoint =
    endpoint === 'build'
      ? `${contentBuildPath}images.json`
      : `${contentDevPath}images.json`;

  const translationsApiEndpoint =
    endpoint === 'build'
      ? `${contentBuildPath}${language}.json`
      : `${contentDevPath}${language}.json`;

  // CARGA DE IMAGENES CON FETCH
  const loadImages = async () => {
    try {
      const response = await fetch(imagesApiEndpoint);
      const data = await response.json();
      setImages(data);
      setError(false);
    } catch (error) {
      setError(true);
      console.error('Error al cargar las imágenes:', error);
    }
  };
  useEffect(() => {
    loadImages();
  }, [endpoint]);

  useEffect(() => {
    import.meta.env.MODE === 'development'
      ? setDevMode(true)
      : setDevMode(false); //Podría sacarlo de este useEffect?

    // CARGA DE TEXTOS CON FETCH
    const loadTranslations = async () => {
      try {
        const response = await fetch(translationsApiEndpoint);
        const data = await response.json();
        setTranslations(data);
        setError(false);
      } catch (error) {
        setError(true);
        console.error('Error al cargar las traducciones:', error);
        // setTranslations({}); // Si falla, asegura un estado vacío
      }
    };
    if (language) {
      loadTranslations();
    }
  }, [language, endpoint]);

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
  }, [navigate, language]);

  const translate = (key) => {
    return (
      key.split('.').reduce((acc, part) => acc && acc[part], translations) || ''
    );
  };

  const getImage = (key) => {
    return key.split('.').reduce((acc, part) => acc && acc[part], images) || '';
  };

  return (
    <TranslationContext.Provider
      value={{
        getImage,
        loadImages,
        translate,
        setLanguage,
        language,
        fromLanguageBtn,
        setFromLanguageBtn,
        setEndpoint,
        endpoint,
        contentBuildPath,
        contentDevPath,
      }}
    >
      {devMode ? <DevBtn /> : null}
      {endpoint === 'dev' && error ? (
        <p
          style={{
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'red',
            zIndex: 999,
            padding: '1rem',
          }}
        >
          Error de fecth, revisa si levantaste los JSON con live server o si
          cambió el puerto!
        </p>
      ) : null}
      {!translations ? <div className="loader"></div> : children}
    </TranslationContext.Provider>
  );
};
