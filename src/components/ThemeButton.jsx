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

    return () => clearTimeout(timeout);
  }, [theme]);

  const handleClick = () => {
    setFromThemeBtn(true);
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button className="button" id="theme-btn" onClick={handleClick}>
      {icon}
    </button>
  );
};

export default ThemeButton;
