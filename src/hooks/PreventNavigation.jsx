import { useEffect } from 'react';
import { useBlocker } from 'react-router-dom';

export const usePreventNavigation = (
  modalVisibility,
  //   setModalVisibility,
  //   setActiveModal,
  showMenu
  //   setShowMenu
) => {
  const blocker = useBlocker((tx) => {
    if (modalVisibility || showMenu) {
      tx.abort(); // Cancelar la navegación
    } else {
      tx.retry(); // Permitir la navegación si confirma
    }
  }, modalVisibility || showMenu);

  useEffect(() => {
    if (!modalVisibility || !showMenu) {
      blocker.reset(); // Resetea el bloqueo si no debe bloquearse
    }
  }, [modalVisibility, showMenu, blocker]);
};
