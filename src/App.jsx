/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { useContext } from 'react';
import { TranslationContext } from './context/TranslationContext';
import { PageContext } from './context/PageContext';
import { ThemeContext } from './context/ThemeContext';
import { useEffect, useState } from 'react';
import './App.css';
import useAnimations from './hooks/useAnimations';

// COMPONENTS/PAGES
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Odyssey from './pages/Odyssey';
import MobileHeader from './components/MobileHeader';
import DesktopHeader from './components/DesktopHeader';
import DesktopFooter from './components/DesktopFooter';
import Modal from './components/Modal';
import InfoModal from './components/InfoModal';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [activeModal, setActiveModal] = useState({
    itemKey: null,
    imgKey: null,
  });
  const [modalVisibility, setModalVisibility] = useState(false);
  const [fromMenuBtn, setFromMenuBtn] = useState(false);
  const [notFirstLoad, setNotFirstLoad] = useState([]);
  const { language, fromLanguageBtn, setFromLanguageBtn, loadImages } =
    useContext(TranslationContext);
  const { theme, fromThemeBtn, setFromThemeBtn } = useContext(ThemeContext);
  const { actualPage, aspectRatio } = useContext(PageContext);

  const location = useLocation();

  useAnimations({
    location,
    theme,
    notFirstLoad,
    setNotFirstLoad,
    modalVisibility,
    setShowMenu,
    fromLanguageBtn,
    setFromLanguageBtn,
    fromThemeBtn,
    setFromThemeBtn,
    aspectRatio,
  });

  const navigate = useNavigate();

  const handleOpenModal = (itemKey, imgKey) => {
    setActiveModal((prev) => {
      return { ...prev, itemKey, imgKey };
    });
    setModalVisibility(true);
  };

  // Hide scrollbar for all the project
  const check = () => {
    if (document.body) {
      document.body.style.overflow = 'hidden';
    } else {
      requestAnimationFrame(check);
    }
  };
  check();

  // CLOSE MODAL OR MENU ON NAVIGATION 'Prevent Navigation' Hack:
  // En el if no usar activeModal porque provoca bucle al tener timeout en el set
  useEffect(() => {
    if (modalVisibility || (showMenu && !fromMenuBtn && !fromLanguageBtn)) {
      setShowMenu(false);
      setFromMenuBtn(false);
      setModalVisibility(false);
      const timeout = setTimeout(() => {
        setActiveModal({
          itemKey: null,
          imgKey: null,
        });
        clearTimeout(timeout);
      }, 150);
      navigate(1);
    }

    if (!notFirstLoad.includes(actualPage)) loadImages();
  }, [location.pathname]);

  // Theme btn rotation mobile
  useEffect(() => {
    let timeout = null;
    const themeBtn = document.querySelector('#theme-btn');

    if (themeBtn && (aspectRatio === 'portrait' || aspectRatio === 'square')) {
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
      {/* MODALES */}
      {activeModal.itemKey !== null && activeModal.itemKey.includes('info') ? (
        <InfoModal
          activeModal={activeModal}
          setActiveModal={setActiveModal}
          modalVisibility={modalVisibility}
          setModalVisibility={setModalVisibility}
        />
      ) : (
        activeModal.itemKey !== null && (
          <Modal
            activeModal={activeModal}
            setActiveModal={setActiveModal}
            modalVisibility={modalVisibility}
            setModalVisibility={setModalVisibility}
          />
        )
      )}

      {/* LAYOUT PRINCIPAL */}
      <main className="h-[100svh] flex flex-col">
        {/* HEADER */}
        {aspectRatio === 'portrait' || aspectRatio === 'square' ? (
          <MobileHeader
            showMenu={showMenu}
            setShowMenu={setShowMenu}
            setFromMenuBtn={setFromMenuBtn}
          />
        ) : (
          <DesktopHeader />
        )}

        {/* CONTENIDO CENTRAL (crece) */}
        {/* <div className=""> */}
        <Routes>
          <Route path="/" element={<Navigate to={`/${language}/home`} />} />
          <Route
            path={`/${language}`}
            element={<Navigate to={`/${language}/home`} />}
          />
          <Route
            path={`/${language}/home`}
            element={
              <Home
                showMenu={showMenu}
                setShowMenu={setShowMenu}
                handleOpenModal={handleOpenModal}
                notFirstLoad={notFirstLoad}
              />
            }
          />
          <Route
            path={`/${language}/skills`}
            element={
              <Skills
                showMenu={showMenu}
                setShowMenu={setShowMenu}
                notFirstLoad={notFirstLoad}
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
                notFirstLoad={notFirstLoad}
              />
            }
          />
          <Route
            path={`/${language}/odyssey`}
            element={
              <Odyssey
                showMenu={showMenu}
                setShowMenu={setShowMenu}
                activeModal={activeModal}
                setActiveModal={setActiveModal}
                handleOpenModal={handleOpenModal}
                notFirstLoad={notFirstLoad}
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
                notFirstLoad={notFirstLoad}
              />
            }
          />
          {/* <Route path="*" element={<Navigate to={`/${language}/home`} />} /> */}
          {/* El problema con este fallback es que si apreto btn language me manda acá */}
        </Routes>
        {/* </div> */}

        {/* FOOTER */}
        {aspectRatio === 'landscape' && <DesktopFooter />}
      </main>
    </>
  );
}

export default App;
