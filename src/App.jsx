/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { TranslationContext } from './i18n/TranslationContext';
import { useEffect, useState } from 'react';
import { updateViewportHeight } from './helpers/updateViewportHeight';
import './App.css';

// COMPONENTS/PAGES
import Home from './pages/Home';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Exercises from './pages/Exercises';
import MobileHeader from './components/MobileHeader';
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
  const { language, fromLanguageBtn, setFromLanguageBtn } =
    useContext(TranslationContext);

  const handleOpenModal = (itemKey, img, link) => {
    setActiveModal({ itemKey, img, link });
  };

  const imagePreLoad = (urls) => {
    urls.map((url) => {
      const img = new Image();
      img.src = url;
    });
  };

  // VSUALIZACION
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

  // ANIMACIONES
  useEffect(() => {
    let headerTimeout = null;
    const delayIncrement = 0.1;

    if (fromLanguageBtn && aspectRatio === 'portrait') {
      setFromLanguageBtn(false);
      return;
    }
    setShowMenu(false);

    const buttons = Array.from(document.querySelectorAll('.page a')).reverse();
    const icons = Array.from(
      document.querySelectorAll('#desktop-footer a')
    ).reverse();
    const desktopHeaderBtns = Array.from(
      document.querySelectorAll('#desktop-header a')
    );
    desktopHeaderBtns.forEach((item) => item.classList.remove('glowing'));
    if (location.pathname.endsWith('home')) {
      headerTimeout = setTimeout(() => {
        desktopHeaderBtns.forEach((item, index) => {
          const delay = index * delayIncrement;
          item.classList.add('glowing');
          item.style.animationDelay = `${delay}s`;
        });
      }, 10);
    }

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

    buttons.forEach((button, index) => {
      const delay = index * delayIncrement;
      button.style.animationDelay = `${delay}s`;
    });

    return () => {
      clearTimeout(timeout), clearTimeout(headerTimeout);
    };
  }, [location.pathname]);
  useEffect(() => {
    let timeout = null;
    if (aspectRatio === 'portrait' && fromLanguageBtn) {
      const langBtn = document.querySelector('#language-btn');
      langBtn.classList.remove('rotate');
      timeout = setTimeout(() => {
        langBtn.classList.add('rotate');
      }, 10);
    }
    return () => clearTimeout(timeout);
  }, [language]);

  if (!language || language === '') {
    return null;
  } // NO BORRAR, ESTO ASEGURA QUE LANGBTN TENGA CONTENIDO
  return (
    <>
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
          <DesktopFooter aspectRatio={aspectRatio} />
        </>
      )}
      <Routes>
        <Route path="/" element={<Navigate to={`/${language}/home`} />} />
        <Route
          path={`/${language}`}
          element={<Navigate to={`/${language}/home`} />}
        />
        <Route
          path={`/${language}/home`}
          element={<Home showMenu={showMenu} setShowMenu={setShowMenu} />}
        />
        <Route
          path={`/${language}/projects`}
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
          path={`/${language}/exercises`}
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
        <Route
          path={`/${language}/certifications`}
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
        {/* <Route path="*" element={<Navigate to={`/${language}/home`} />} /> */}
        {/* El problema con este fallback es que si apreto btn language me manda acá */}
      </Routes>
    </>
  );
}

export default App;
