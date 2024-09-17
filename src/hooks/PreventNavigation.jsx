import { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export function usePreventNavigation(
  modalVisibility,
  setModalVisibility,
  setActiveModal,
  showMenu,
  setShowMenu
) {
  const navigate = useNavigate();
  const location = useLocation();
  const previousLocationRef = useRef([null, location.pathname]);

  useEffect(() => {
    // Actualiza la referencia sin provocar un re-render
    if (previousLocationRef.current[1] !== location.pathname) {
      previousLocationRef.current.shift(); // Elimina el más antiguo
      previousLocationRef.current.push(location.pathname); // Agrega el nuevo pathname actual
    }

    const handlePopState = () => {
      if (modalVisibility) {
        setModalVisibility(false);
        // Redirige a la página anterior
        // navigate(previousLocationRef.current[0], { replace: true });
        history.replaceState('prevNav', null, previousLocationRef);
        history.go(0);
        console.log('holaaa');
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [modalVisibility, location.pathname, navigate, setModalVisibility]);

  return previousLocationRef.current[0]; // Si lo necesitas en algún lado
}


no funciona, me rindo. Esperaré a que salgo un buen curso de la nueva sintaxis de Router v6.4 para usar useBlocker supongo

ChatGPT dijo:
ChatGPT
Entiendo tu frustración, Matu. La nueva sintaxis de react-router puede ser un poco complicada, sobre todo con las diferencias entre versiones. Esperar un buen curso o tutorial sobre la versión 6.4 para usar useBlocker y entender mejor la nueva API es una buena idea. Mientras tanto, si necesitas seguir avanzando, tal vez podrías enfocarte en otras partes de tu proyecto.

Si en algún momento quieres volver a probar otras ideas o ajustar algo, ¡avísame! Estoy acá para ayudarte.