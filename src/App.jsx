/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useContext, useRef } from 'react';
import { TranslationContext } from './i18n/TranslationContext';
import { ThemeContext } from './context/ThemeContext';
import { useEffect, useState } from 'react';
import { updateViewportHeight } from './helpers/updateViewportHeight';
import './App.css';

// COMPONENTS/PAGES
import Home from './pages/Home';
import Skills from './pages/Skills';
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
  const [aspectRatio, setAspectRatio] = useState(updateAspectRatio());
  const [activeModal, setActiveModal] = useState('');
  const [modalVisibility, setModalVisibility] = useState(false);
  const { language, fromLanguageBtn, setFromLanguageBtn } =
    useContext(TranslationContext);
  const { theme } = useContext(ThemeContext);

  const location = useLocation();
  const prevThemeRef = useRef(theme);

  const handleOpenModal = (itemKey, img, link) => {
    setModalVisibility(true);
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

    if (
      aspectRatio === 'portrait' &&
      (prevThemeRef.current !== theme || fromLanguageBtn)
    ) {
      prevThemeRef.current = theme;
      setFromLanguageBtn(false);
      return;
    }
    setShowMenu(false);

    const buttons = Array.from(document.querySelectorAll('.page a')).reverse();
    const icons = Array.from(
      document.querySelectorAll('#desktop-footer a, #desktop-footer button')
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
  }, [location.pathname, theme]);

  // Theme y rotation mobile
  useEffect(() => {
    let timeout = null;
    const themeBtn = document.querySelector('#theme-btn');

    if (themeBtn && aspectRatio === 'portrait') {
      themeBtn.classList.remove('rotate');
      timeout = setTimeout(() => {
        themeBtn.classList.add('rotate');
      }, 10);
    }

    document.body.setAttribute('data-theme', theme);

    return () => clearTimeout(timeout);
  }, [theme]);

  if (!language || language === '') {
    return null;
  } // NO BORRAR, ESTO ASEGURA QUE LANGBTN TENGA CONTENIDO y resta un warning de "No routes matched location".
  return (
    <>
      {activeModal && (
        <Modal
          activeModal={activeModal.itemKey}
          img={activeModal.img}
          link={activeModal.link}
          setActiveModal={setActiveModal}
          modalVisibility={modalVisibility}
          setModalVisibility={setModalVisibility}
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
          path={`/${language}/skills`}
          element={
            <Skills
              showMenu={showMenu}
              setShowMenu={setShowMenu}
              imagePreLoad={imagePreLoad}
            />
          }
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
