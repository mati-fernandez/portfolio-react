/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Sun from '../assets/Sun';
import Moon from '../assets/Moon';

const ThemeButton = () => {
  const { theme, setTheme, fromThemeBtn, setFromThemeBtn } =
    useContext(ThemeContext);
  const [icon, setIcon] = useState(theme === 'dark' ? <Sun /> : <Moon />);

  // Remover inline styles de body al finalizar carga de App
  const removeInlineStyles = () => {
    const body = document.querySelector('body');
    if (body) {
      body.style.backgroundColor = '';
      body.style.fontWeight = '';
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIcon(theme === 'dark' ? <Sun /> : <Moon />);
    }, 600);

    return () => clearTimeout(timeout);
  }, [theme]);

  const handleClick = () => {
    removeInlineStyles();
    setTheme(theme === 'light' ? 'dark' : 'light');
    setFromThemeBtn(true);
  };

  return (
    <button className="button" id="theme-btn" onClick={handleClick}>
      {icon}
    </button>
  );
};

export default ThemeButton;
