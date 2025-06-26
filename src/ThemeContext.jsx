import React, { createContext, useContext, useEffect, useState } from "react";
import { light, dark } from "./theme";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState(
    () => localStorage.getItem("theme") || "light"
  );
  const theme = mode === "dark" ? dark : light;

  useEffect(() => {
    localStorage.setItem("theme", mode);
    document.body.style.background = theme.background;
    document.body.style.color = theme.textPrimary;
  }, [mode, theme]);

  function toggleTheme() {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{ mode, theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}