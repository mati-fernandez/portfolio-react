/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useContext } from "react";
import { TranslationContext } from "./context/contexts";
import { PageContext } from "./context/contexts";
import { useEffect, useState } from "react";
import "./App.css";

// COMPONENTS/PAGES
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";
import Odyssey from "./pages/Odyssey";
import MobileFooterWrapper from "./components/MobileFooterWrapper";
import DesktopHeader from "./components/DesktopHeader";
import DesktopFooter from "./components/DesktopFooter";
import Modal from "./components/Modal";
import InfoModal from "./components/InfoModal";

function App() {
  const [activeModal, setActiveModal] = useState({
    itemKey: null,
    imgKey: null,
  });
  const [modalVisibility, setModalVisibility] = useState(false);
  const [fromMenuBtn, setFromMenuBtn] = useState(false);
  const { language, fromLanguageBtn, setFromLanguageBtn } =
    useContext(TranslationContext);
  const { showMenu, setShowMenu } = useContext(PageContext);

  const location = useLocation();

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
      document.body.style.overflow = "hidden";
    } else {
      requestAnimationFrame(check);
    }
  };
  check();

  // CLOSE MODAL OR MENU ON NAVIGATION 'Prevent Navigation' Hack:
  // En el if no usar activeModal porque provoca bucle al tener timeout en el set
  useEffect(() => {
    console.log(fromLanguageBtn, fromMenuBtn);
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
    if (fromLanguageBtn) setFromLanguageBtn(false);
  }, [location.pathname]);

  if (!language || language === "") {
    return null;
  } // NO BORRAR, ESTO ASEGURA QUE LANGBTN TENGA CONTENIDO y resta un warning de "No routes matched location".
  return (
    <>
      {/* MODALES */}
      {activeModal.itemKey !== null && activeModal.itemKey.includes("info") ? (
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
      <div className="flex h-[90svh] flex-col landscape:h-[100svh]">
        {/* HEADER */}
        <MobileFooterWrapper
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          setFromMenuBtn={setFromMenuBtn}
        />
        <DesktopHeader />

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
              />
            }
          />
          <Route
            path={`/${language}/skills`}
            element={<Skills showMenu={showMenu} setShowMenu={setShowMenu} />}
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
              />
            }
          />
          {/* <Route path="*" element={<Navigate to={`/${language}/home`} />} /> */}
          {/* El problema con este fallback es que si cambio language desde la url me manda acá */}
        </Routes>
        {/* </div> */}

        {/* FOOTER */}
        <DesktopFooter />
      </div>
    </>
  );
}

export default App;
