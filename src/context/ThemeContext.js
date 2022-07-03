import React, { createContext, useContext } from "react";
const ThemeContext = createContext();
export function useTheme() {
  return useContext(ThemeContext);
}
export function ThemeProvider({ children }) {
  const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
  };
  const value = {
    isDarkMode,
    setDarkMode,
    toggleDarkMode,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
