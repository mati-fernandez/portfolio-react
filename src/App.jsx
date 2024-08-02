import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { TranslationProvider } from './i18n/TranslationContext';
import './App.css';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Exercises from './pages/Exercises';
import MobileHeader from './components/MobileHeader';
import LanguageSetup from './helpers/LanguageSetup';
import LanguageButton from './components/LanguageButton';
import DesktopHeader from './components/DesktopHeader';
import { updateAspectRatio } from './helpers/updateAspectRatio';
import { useEffect, useState } from 'react';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const [aspectRatio, setAspectRatio] = useState(updateAspectRatio());

  window.addEventListener('resize', () => setAspectRatio(updateAspectRatio()));

  useEffect(() => {
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
      {aspectRatio === 'portrait' ? (
        <MobileHeader showMenu={showMenu} setShowMenu={setShowMenu} />
      ) : (
        <>
          <Link className="link" to="/">
            <img id="logo" src="favicon.svg " alt="Matias" />
          </Link>
          <LanguageButton />
          <DesktopHeader />
        </>
      )}
    </TranslationProvider>
  );
}

export default App;
