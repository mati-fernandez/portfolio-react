/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Sun from '../assets/Sun';
import Moon from '../assets/Moon';

const ThemeButton = () => {
  const { theme, setTheme, setFromThemeBtn } = useContext(ThemeContext);
  const [icon, setIcon] = useState(theme === 'dark' ? <Sun /> : <Moon />);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIcon(theme === 'dark' ? <Sun /> : <Moon />);
    }, 600);

    localStorage.setItem('theme', theme);

    return () => clearTimeout(timeout);
  }, [theme]);

  const handleClick = () => {
    const header =
      document.querySelector('#desktop-header') ??
      document.querySelector('#mobile-header');
    document.querySelector('body').style.transition =
      'background-color 0.8s ease-in-out, font-weight 0.8s ease-in-out';
    header.style.transition =
      'background-color 0.8s ease-in-out, font-weight 0.8s ease-in-out';
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
