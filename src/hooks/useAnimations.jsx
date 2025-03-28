/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react';
import { PageContext } from '../context/PageContext';

export default function useAnimations({
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
}) {
  // eslint-disable-next-line no-unused-vars
  const { actualPage, viewMore, $viewLess, $viewMore } =
    useContext(PageContext);
  // ANIMACIONES
  useEffect(() => {
    // Pequeño retraso porque al cambiar de idioma y volver hacia atrás, el query no llegaba a agarrar los .page a
    // SetTimeOut necesario para "dar tiempo" a que se desmonte bien el componente
    const timeout = setTimeout(() => {
      let fadeIn = null;
      let removeFadeIn = null;
      const progress = Array.from(document.querySelectorAll('.progress'));
      const buttons = Array.from(
        document.querySelectorAll('.page button:not(.view-more, .view-less)')
      ).reverse();
      const icons = Array.from(
        document.querySelectorAll('#desktop-footer a, #desktop-footer button')
      ).reverse();
      const desktopHeaderBtns = Array.from(
        document.querySelectorAll('#desktop-header a')
      );

      if (aspectRatio === 'portrait' && !fromThemeBtn && !fromLanguageBtn) {
        setShowMenu(false);
      }
      if (fromLanguageBtn) setFromLanguageBtn(false);
      if (fromThemeBtn) setFromThemeBtn(false);
      //**********************************************************************************************//
      // SI NO ES PRIMERA CARGA, CANCELA ANIMACIONES SALVO EN HOME Y CAMBIO DE TEMA en cuanto a footer
      //**********************************************************************************************//

      if (
        notFirstLoad.includes(actualPage) &&
        !fromThemeBtn &&
        !fromLanguageBtn
      ) {
        if ($viewMore.current) {
          $viewMore.current.style.animation = 'none';
          $viewMore.current.style.display = 'block';
        }
        // if (viewMore[actualPage]) handleViewMore();
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
        //********************************//
        //******SI ES PRIMERA CARGA ******//
        //********************************//
        setFromThemeBtn(false);
        setFromLanguageBtn(false);
        setNotFirstLoad((prevState) => [...prevState, actualPage]);

        let headerTimeout = null;
        const delayIncrement = 0.1;

        // Fade in del view more
        //Se comprueba si el botón existe en esa página
        if ($viewMore.current) {
          // Se oculta en la primera carga para esperar la animación de entrada:
          $viewMore.current.style.opacity = 0;
          // Evitar intaracción para no cortar la animación si lo tocan antes que se complete:
          $viewMore.current.style.pointerEvents = 'none';
          // Despues de llegar los enlaces de pagina aparece view more
          fadeIn = setTimeout(() => {
            $viewMore.current.classList.add('fade-in');
            // Saco el forwards para que funcione el hover
            console.log($viewMore.current);
            removeFadeIn = setTimeout(() => {
              console.log($viewMore.current);
              $viewMore.current.style.opacity = 0.5;
              $viewMore.current.classList.remove('fade-in');
              $viewMore.current.style.pointerEvents = 'all';
            }, 1000);
          }, 1000);
        }

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
          clearTimeout(footerTimeout),
            clearTimeout(fillTimeout),
            clearTimeout(headerTimeout),
            clearTimeout(fadeIn),
            clearTimeout(removeFadeIn);
        };
      }
    }, 1); //Necesario para "dar tiempo" a que se desmonte bien el componente
    return () => clearTimeout(timeout);
  }, [theme, viewMore, modalVisibility, actualPage, location]); // No sacar actualPage de las deps porque evita error
}
