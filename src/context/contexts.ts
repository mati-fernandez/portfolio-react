import { createContext } from "react";
import type { Styles } from "./contexts.d";
import type { ThemeContextType } from "./contexts.d";

export const PageContext = createContext<any>(null);
export const TranslationContext = createContext<any>(null);
export const StylesContext = createContext<any>(null);
export const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  setTheme: () => {},
  styles: {} as Styles,
  setStyles: () => {},
  fromThemeBtn: false,
  setFromThemeBtn: () => {},
});
