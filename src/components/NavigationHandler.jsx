import { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const useNavigationHandler = ({
  activeModal,
  setActiveModal,
  setModalVisibility,
  showMenu,
  setShowMenu,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const prevLocation = useRef(location.pathname); // Guardar la ubicación anterior

  useEffect(() => {
    console.log('Current Location:', location.pathname);
    console.log('Previous Location:', prevLocation.current);
    console.log('Active Modal:', activeModal);
    console.log('Show Menu:', showMenu);

    if (activeModal !== undefined || showMenu) {
      // Prevenir la navegación si el modal está activo o el menú está visible
      //   setModalVisibility(false);
      //   setShowMenu(false);
      const timeout = setTimeout(() => {
        // setActiveModal('');
        clearTimeout(timeout);
      }, 150);

      // Usar prevLocation.current para la navegación
      navigate(prevLocation.current);
      console.log(
        'Blocking navigation and redirecting to:',
        prevLocation.current
      );
    } else {
      prevLocation.current = location.pathname; // Actualizar la ubicación anterior
      console.log('Updating previous location to:', location.pathname);
    }
  }, [
    activeModal,
    showMenu,
    location.pathname,
    navigate,
    setActiveModal,
    setModalVisibility,
    setShowMenu,
  ]);
};
