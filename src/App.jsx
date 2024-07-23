import { HashRouter, Routes, Route } from 'react-router-dom';
import { TranslationProvider } from './i18n/TranslationContext';
import './App.css';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Exercises from './pages/Exercises';
import MobileHeader from './components/MobileHeader';
import LanguageSetup from './helpers/LanguageSetup';
import { useEffect, useState } from 'react';

function App() {
  const [showMenu, setShowMenu] = useState(false);

  function updateViewportHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    //Establece una variable CSS personalizada --vh con el valor calculado de la altura del viewport visible en píxeles.
  }

  document.addEventListener('contextmenu', (e) => e.preventDefault());

  useEffect(() => {
    updateViewportHeight();
    window.addEventListener('resize', updateViewportHeight);

    return () => {
      window.removeEventListener('resize', updateViewportHeight);
    };
  }, []);

  return (
    <HashRouter>
      <TranslationProvider>
        <LanguageSetup />
        <Routes>
          <Route
            path="/"
            element={<Home />}
            showMenu={showMenu}
            setShowMenu={setShowMenu}
          />
          <Route
            path="/projects"
            element={<Projects />}
            showMenu={showMenu}
            setShowMenu={setShowMenu}
          />
          <Route
            path="/certifications"
            element={
              <Certifications showMenu={showMenu} setShowMenu={setShowMenu} />
            }
          />
          <Route
            path="/exercises"
            element={<Exercises />}
            showMenu={showMenu}
            setShowMenu={setShowMenu}
          />
        </Routes>
        <MobileHeader showMenu={showMenu} setShowMenu={setShowMenu} />
      </TranslationProvider>
    </HashRouter>
  );
}

export default App;
