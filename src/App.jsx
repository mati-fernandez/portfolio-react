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
import Modal from './components/Modal';

const updateAspectRatio = () =>
  window.innerWidth / window.innerHeight < 1.2 ? 'portrait' : 'landscape';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const [aspectRatio, setAspectRatio] = useState(updateAspectRatio());
  const [activeModal, setActiveModal] = useState('');

  const handleOpenModal = (itemKey, img, link) => {
    setActiveModal({ itemKey, img, link });
  };

  const imagePreLoad = (urls) => {
    urls.map((url) => {
      const img = new Image();
      img.src = url;
    });
  };

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

    if (location.pathname === '/') return;

    const buttons = Array.from(document.querySelectorAll('.page a')).reverse();
    const icons = Array.from(
      document.querySelectorAll('#desktop-footer a')
    ).reverse();
    const delayIncrement = 0.1;

    buttons.forEach((button, index) => {
      const delay = index * delayIncrement;
      button.style.animationDelay = `${delay}s`;
    });

    icons.forEach((icon) => {
      icon.classList.remove('animate-icon');
    });
    const timeout = setTimeout(() => {
      icons.forEach((icon, index) => {
        const delay = index * delayIncrement;
        icon.classList.add('animate-icon');
        icon.style.animationDelay = `${delay}s`;
      });
    }, 10);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <TranslationProvider>
      <LanguageSetup />
      {activeModal && (
        <Modal
          activeModal={activeModal.itemKey}
          img={activeModal.img}
          link={activeModal.link}
          setActiveModal={setActiveModal}
        />
      )}
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
          element={
            <Projects
              showMenu={showMenu}
              setShowMenu={setShowMenu}
              activeModal={activeModal}
              setActiveModal={setActiveModal}
              handleOpenModal={handleOpenModal}
              imagePreLoad={imagePreLoad}
            />
          }
        />
        <Route
          path="/certifications"
          element={
            <Certifications
              showMenu={showMenu}
              setShowMenu={setShowMenu}
              setActiveModal={setActiveModal}
              handleOpenModal={handleOpenModal}
              imagePreLoad={imagePreLoad}
            />
          }
        />
        <Route
          path="/exercises"
          element={
            <Exercises
              showMenu={showMenu}
              setShowMenu={setShowMenu}
              activeModal={activeModal}
              setActiveModal={setActiveModal}
              handleOpenModal={handleOpenModal}
              imagePreLoad={imagePreLoad}
            />
          }
        />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </TranslationProvider>
  );
}

export default App;
