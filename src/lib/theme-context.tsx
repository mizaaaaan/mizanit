import { createContext, useContext } from "react";

export type Theme = "dark" | "light";

// Shared between the inline boot script in __root.tsx and ThemeProvider:
// the provider lazy-reads the DOM attribute the script already set so the
// first paint keeps the visitor's stored/system theme with no flash.
export const ThemeContext = createContext<{
  theme: Theme;
  toggle: () => void;
  setTheme: (t: Theme) => void;
} | null>(null);

export function readTheme(): Theme {
  if (typeof document === "undefined") return "dark";
  const current = document.documentElement.dataset.theme;
  if (current === "light" || current === "dark") return current;
  return "dark";
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
