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
  const { language } = useContext(TranslationContext);
  const [fromLanguageBtn, setFromLanguageBtn] = useState(false);

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
    let headerTimeout = null;
    const delayIncrement = 0.1;

    console.log('fromLanguageBtn', fromLanguageBtn);
    if (fromLanguageBtn) {
      //solo para portrait, lo gestiona LanguageButton (se hace aca para no romper el de desktop)
      setFromLanguageBtn(false);
      return;
    }
    setShowMenu(false);

    // No en la primer carga pero ahora cada vez que cambia location deberia tambien animar el container de izq a der para que coincida con la animacion de los icons quizas o encender todos los items del header de forma secuencial

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

  // Si `language` aún no está definido, renderiza un loader o nada
  if (!language || language === '') {
    console.log('language aún no fue definido');
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
        <MobileHeader
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          aspectRatio={aspectRatio}
          setFromLanguageBtn={setFromLanguageBtn}
        />
      ) : (
        <>
          <DesktopHeader />
          <DesktopFooter aspectRatio={aspectRatio} />
        </>
      )}
      <Routes>
        {console.log('App render', language)}
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
      </Routes>
    </>
  );
}

export default App;
