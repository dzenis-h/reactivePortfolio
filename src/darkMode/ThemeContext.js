import { createContext } from "react";

const defaultContextData = {
  menu: false,
  dark: false,
  toggleTheme: () => {},
  toggleMenu: () => {},
};

const ThemeContext = createContext(defaultContextData);

export default ThemeContext;
