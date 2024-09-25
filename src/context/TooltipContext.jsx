/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useState } from 'react';

export const TooltipContext = createContext();

export const TooltipProvider = ({ children }) => {
  const [tooltip, setTooltip] = useState({
    x: 0,
    y: 0,
    visible: false,
    text: '',
  });

  const handleMouseEnter = (e, text) => {
    setTooltip({
      x: e.clientX,
      y: e.clientY,
      visible: true,
      text,
    });
  };

  const handleMouseLeave = () => {
    setTooltip((prev) => ({ ...prev, visible: false }));
  };

  const handleMouseMove = (e) => {
    setTooltip((prev) => ({
      ...prev,
      x: e.clientX + 10, // 10px de distancia del cursor
      y: e.clientY + 10,
    }));
  };

  return (
    <TooltipContext.Provider
      value={{
        tooltip,
        setTooltip,
        handleMouseEnter,
        handleMouseLeave,
        handleMouseMove,
      }}
    >
      {children}
    </TooltipContext.Provider>
  );
};
