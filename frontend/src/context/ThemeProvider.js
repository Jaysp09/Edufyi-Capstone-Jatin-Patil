import { createContext, useContext, useState, useEffect, useCallback } from "react";

const ThemeContext = createContext();

function getInitialTheme() {
  try {
    const stored = localStorage.getItem("jp-theme");
    if (stored === "light" || stored === "dark") return stored;
  } catch (e) {
    // localStorage unavailable
  }
  return "dark";
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    localStorage.setItem("jp-theme", theme);
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  // Also set dark class immediately on mount
  useEffect(() => {
    const initial = getInitialTheme();
    if (initial === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = useCallback(() => setTheme((prev) => (prev === "dark" ? "light" : "dark")), []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
