/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  Routes,
  Route,
  useLocation,
  Navigate,
  useNavigate,
} from 'react-router-dom';
import { useContext } from 'react';
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
import DesktopHeader from './components/DesktopHeader';
import DesktopFooter from './components/DesktopFooter';
import Modal from './components/Modal';
import InfoModal from './components/InfoModal';

const updateAspectRatio = () =>
  window.innerWidth / window.innerHeight < 1.2 ? 'portrait' : 'landscape';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [aspectRatio, setAspectRatio] = useState(updateAspectRatio());
  const [activeModal, setActiveModal] = useState('');
  const [modalVisibility, setModalVisibility] = useState(false);
  const [fromMenuBtn, setFromMenuBtn] = useState(false);
  const [notFirstLoad, setNotFirstLoad] = useState([]);
  const { language, fromLanguageBtn, setFromLanguageBtn } =
    useContext(TranslationContext);
  const { theme, fromThemeBtn, setFromThemeBtn } = useContext(ThemeContext);
  const [viewMore, setViewMore] = useState({
    projects: false,
    exercises: false,
    certifications: false,
  });
  const [actualPage, setActualPage] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

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

  // CLOSE MODAL OR MENU ON NAVIGATION 'Prevent Navigation' Hack:
  useEffect(() => {
    // En el if no usar activeModal porque provoca bucle al tener timeout en el set
    if (modalVisibility || (showMenu && !fromMenuBtn && !fromLanguageBtn)) {
      setShowMenu(false);
      setFromMenuBtn(false);
      setModalVisibility(false);
      const timeout = setTimeout(() => {
        setActiveModal('');
        clearTimeout(timeout);
      }, 150);
      navigate(1);
    }
  }, [location.pathname]);

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
    // Pequeño retraso porque al cambiar de idioma y volver hacia atrás, el query no llegaba a agarrar los .page a
    // SetTimeOut necesario para "dar tiempo" a que se desmonte bien el componente
    const timeout = setTimeout(() => {
      const progress = Array.from(document.querySelectorAll('.progress'));
      const buttons = Array.from(
        document.querySelectorAll('.page a:not(.view-more, .secondary)')
      ).reverse();
      const secondaryButtons = Array.from(
        document.querySelectorAll('.page a:not(.view-more)')
      );
      const icons = Array.from(
        document.querySelectorAll('#desktop-footer a, #desktop-footer button')
      ).reverse();
      const desktopHeaderBtns = Array.from(
        document.querySelectorAll('#desktop-header a')
      );
      const $viewMore = document.querySelector('.view-more');
      const handleViewMore = (e) => {
        if (e && e.target.matches('.view-more'))
          setViewMore((prevState) => ({
            ...prevState,
            [lastWord]: true,
          }));
        if ($viewMore) $viewMore.style.display = 'none';
      };
      if (viewMore[actualPage] === true)
        secondaryButtons.forEach((button) => {
          button.style.display = 'block';
          button.style.opacity = 1;
        });

      if (aspectRatio === 'portrait' && !fromThemeBtn && !fromLanguageBtn) {
        setShowMenu(false);
      }
      if (fromLanguageBtn) setFromLanguageBtn(false);
      if (fromThemeBtn) setFromThemeBtn(false);

      // SI NO ES PRIMERA CARGA, CANCELA ANIMACIONES SALVO EN HOME Y CAMBIO DE TEMA

      const lastWord = location.pathname.match(/(\w+)$/)?.[0] || ''; // Captura la última palabra del pathname
      setActualPage(lastWord);
      if (
        notFirstLoad.includes(lastWord) &&
        !fromThemeBtn &&
        !fromLanguageBtn
      ) {
        if ($viewMore) {
          $viewMore.style.animation = 'none';
          $viewMore.style.display = 'block';
        }
        if (viewMore[lastWord]) handleViewMore();
        progress.forEach((item) => item.classList.remove('fill-progress'));
        desktopHeaderBtns.forEach((item) => item.classList.remove('glowing'));
        icons.forEach((icon) => {
          icon.classList.remove('animate-icon');
        });
        buttons.forEach((button) => {
          button.classList.remove = 'slide-in';
          button.style.opacity = 1;
        });
      } else {
        // SI ES PRIMERA CARGA...
        document.addEventListener('click', handleViewMore);
        setFromThemeBtn(false);
        setFromLanguageBtn(false);
        setNotFirstLoad((prevState) => [...prevState, lastWord]);

        let headerTimeout = null;
        const delayIncrement = 0.1;

        // Fade in del view more, se remueve la animación para que funcione el hover
        const fadeIn = setTimeout(() => {
          if ($viewMore) {
            $viewMore.style.display = 'block';
            $viewMore.style.animationFillMode = '';
          }
        }, 1500);

        progress.forEach((item) => item.classList.remove('fill-progress'));
        const fillTimeout = setTimeout(() => {
          progress.forEach((item, index) => {
            const delay = index * delayIncrement;
            item.classList.add('fill-progress');
            item.style.animationDelay = `${delay}s`;
          });
        }, 10);

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
        const footerTimeout = setTimeout(() => {
          icons.forEach((icon, index) => {
            const delay = index * delayIncrement;
            icon.classList.add('animate-icon');
            icon.style.animationDelay = `${delay}s`;
          });
        }, 10);

        buttons.forEach((button, index) => {
          const delay = index * delayIncrement;
          button.classList.add('slide-in');
          button.style.animationDelay = `${delay}s`;
        });

        return () => {
          document.removeEventListener('click', handleViewMore);
          clearTimeout(footerTimeout),
            clearTimeout(fillTimeout),
            clearTimeout(headerTimeout),
            clearTimeout(fadeIn);
        };
      }
    }, 1); //Necesario para "dar tiempo" a que se desmonte bien el componente
    return () => clearTimeout(timeout);
  }, [location.pathname, theme, viewMore]);

  // Theme btn rotation mobile
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
      {activeModal && activeModal.itemKey.includes('info') ? (
        <InfoModal
          activeModal={activeModal.itemKey}
          setActiveModal={setActiveModal}
          modalVisibility={modalVisibility}
          setModalVisibility={setModalVisibility}
        />
      ) : (
        activeModal && (
          <Modal
            activeModal={activeModal.itemKey}
            img={activeModal.img}
            link={activeModal.link}
            setActiveModal={setActiveModal}
            modalVisibility={modalVisibility}
            setModalVisibility={setModalVisibility}
          />
        )
      )}
      {aspectRatio === 'portrait' ? (
        <MobileHeader
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          setFromMenuBtn={setFromMenuBtn}
        />
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
              imagePreLoad={imagePreLoad}
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
              imagePreLoad={imagePreLoad}
              notFirstLoad={notFirstLoad}
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
              imagePreLoad={imagePreLoad}
              notFirstLoad={notFirstLoad}
              viewMore={viewMore}
              actualPage={actualPage}
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
