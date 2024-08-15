import { Routes, Route, useLocation } from 'react-router-dom';
import { TranslationProvider } from './i18n/TranslationContext';
import { useEffect, useState } from 'react';
import { updateViewportHeight } from './helpers/updateViewportHeight';
import './App.css';

// COMPONENTS/PAGES
import Home from './pages/Home';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Exercises from './pages/Exercises';
import MobileHeader from './components/MobileHeader';
import LanguageSetup from './helpers/LanguageSetup';
import DesktopHeader from './components/DesktopFooter';
import DesktopFooter from './components/DesktopHeader';

const updateAspectRatio = () =>
  window.innerWidth / window.innerHeight < 1.2 ? 'portrait' : 'landscape';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const [aspectRatio, setAspectRatio] = useState(updateAspectRatio());

  useEffect(() => {
    updateViewportHeight();
    window.addEventListener('resize', () =>
      setAspectRatio(updateAspectRatio())
    );
    setAspectRatio(updateAspectRatio());
    document.addEventListener('contextmenu', (e) => e.preventDefault());

    return () => {
      document.removeEventListener('contextmenu', (e) => e.preventDefault());
    };
  }, []);

  useEffect(() => {
    setShowMenu(false);
  }, [location]);

  return (
    <TranslationProvider>
      <LanguageSetup />
      {aspectRatio === 'portrait' ? (
        <MobileHeader showMenu={showMenu} setShowMenu={setShowMenu} />
      ) : (
        <>
          <DesktopHeader />
          <DesktopFooter />
        </>
      )}
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
    </TranslationProvider>
  );
}

export default App;
