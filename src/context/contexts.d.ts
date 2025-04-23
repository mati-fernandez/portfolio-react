import type { Properties } from "csstype";
import type * as CSS from "csstype";

export interface Styles extends Partial<Properties> {
  fontSize?: Properties["fontSize"];
  fontSizeLandscape?: Properties["fontSize"];
  fontSizePortrait?: Properties["fontSize"];
  colorGeneralPrimary?: Properties["color"];
  colorGeneralPrimaryAlpha?: Properties["color"];
  colorGeneralSecondary?: Properties["color"];
  colorGeneralSecondaryAlpha?: Properties["color"];
  borderGeneral?: Properties["border"];
  colorBoxShadow?: Properties["color"];
  colorPrimary?: Properties["color"];
  colorSecondary?: Properties["color"];
  colorTertiary?: Properties["color"];
  colorSecondaryAlpha?: Properties["color"];
  colorBackground?: Properties["color"];
  colorBackgroundSecondary?: Properties["color"];
  colorBackgroundAlpha?: Properties["color"];
  colorBackgroundAlphaSecondary?: Properties["color"];
  border?: Properties["border"];
  iconFill?: Properties["color"];
  titleColor?: Properties["color"];
  h3FontWeight?: Properties["fontWeight"];
  fontWeight?: Properties["fontWeight"];
}

export interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
  styles: Styles;
  setStyles: (styles: Styles) => void;
  fromThemeBtn: boolean;
  setFromThemeBtn: (value: boolean) => void;
}
