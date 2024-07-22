import { useEffect } from 'react';
import './App.css';
import avatar from './assets/avatar.svg';
import LanguageButton from './components/LanguageButton';
import MobileHeader from './components/MobileHeader';
import { useTranslation } from './i18n/TranslationContext';

function App() {
  const { translate, setLanguage, language } = useTranslation();

  function updateViewportHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    //Establece una variable CSS personalizada --vh con el valor calculado de la altura del viewport visible en píxeles.
  }

  function detectAndSetLanguage() {
    const userLanguage = navigator.language || navigator.userLanguage;
    const detectedLanguage = userLanguage.startsWith('es') ? 'es' : 'en';
    setLanguage(detectedLanguage);
  }

  useEffect(() => {
    updateViewportHeight();
    window.addEventListener('resize', updateViewportHeight);
    detectAndSetLanguage();

    return () => {
      window.removeEventListener('resize', updateViewportHeight);
    };
  }, []);

  return (
    <div id="container">
      <LanguageButton language={language} setLanguage={setLanguage} />
      <img id="avatar" src={avatar} alt="avatar" />
      <p id="presentacion">{translate('description')}</p>
      <MobileHeader />
    </div>
  );
}

export default App;
