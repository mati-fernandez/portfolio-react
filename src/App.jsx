import { Routes, Route, useLocation } from 'react-router-dom';
import { TranslationProvider } from './i18n/TranslationContext';
import './App.css';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Exercises from './pages/Exercises';
import MobileHeader from './components/MobileHeader';
import LanguageSetup from './helpers/LanguageSetup';
import { useEffect, useState } from 'react';
import { updateViewportHeight } from './helpers/updateViewportHeight';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  // Llamar a la función al cargar y al redimensionar la ventana
  updateViewportHeight();
  window.addEventListener('resize', updateViewportHeight);

  useEffect(() => {
    document.addEventListener('contextmenu', (e) => e.preventDefault());

    return () => {
      document.removeEventListener('contextmenu', (e) => e.preventDefault());
    };
  }, []);

  // Resetea `showMenu` a false cada vez que la ubicación cambia
  useEffect(() => {
    setShowMenu(false);
  }, [location]);

  return (
    <TranslationProvider>
      <LanguageSetup />
      <Routes>
        <Route
          path="/"
          element={<Home showMenu={showMenu} setShowMenu={setShowMenu} />}
        />
        <Route
          path="/projects"
          element={<Projects showMenu={showMenu} setShowMenu={setShowMenu} />}
        />
        <Route
          path="/certifications"
          element={
            <Certifications showMenu={showMenu} setShowMenu={setShowMenu} />
          }
        />
        <Route
          path="/exercises"
          element={<Exercises showMenu={showMenu} setShowMenu={setShowMenu} />}
        />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <MobileHeader showMenu={showMenu} setShowMenu={setShowMenu} />
    </TranslationProvider>
  );
}

export default App;
