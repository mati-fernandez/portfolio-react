/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const [fromThemeBtn, setFromThemeBtn] = useState(false);

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
