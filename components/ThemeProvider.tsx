"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    let initialTheme = document.documentElement.dataset.theme;
    if (initialTheme !== "dark" && initialTheme !== "light") {
      try {
        initialTheme = localStorage.getItem("roaya-theme") ?? "";
      } catch {
        // Fall back to the system preference when storage is unavailable.
      }
    }
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const resolvedTheme: Theme =
      initialTheme === "dark" || initialTheme === "light"
        ? initialTheme
        : prefersDark
          ? "dark"
          : "light";
    setTheme(resolvedTheme);
    document.documentElement.dataset.theme = resolvedTheme;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.dataset.theme = newTheme;
    try {
      localStorage.setItem("roaya-theme", newTheme);
    } catch {
      // Keep the current session usable when storage is unavailable.
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
