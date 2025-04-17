/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { ThemeContext } from './contexts';

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ?? document.body.getAttribute('data-theme')
  );
  const [fromThemeBtn, setFromThemeBtn] = useState(false);

  const removeInlineStyles = () => {
    const body = document.querySelector('body');
    if (body) {
      body.removeAttribute('style');
    }
  };

  useEffect(() => {
    removeInlineStyles();
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        fromThemeBtn,
        setFromThemeBtn,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
