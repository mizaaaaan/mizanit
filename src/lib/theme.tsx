import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type Theme = "dark" | "light";

const ThemeContext = createContext<{
  theme: Theme;
  toggle: () => void;
  setTheme: (t: Theme) => void;
} | null>(null);

function readTheme(): Theme {
  if (typeof document === "undefined") return "dark";
  const current = document.documentElement.dataset.theme;
  if (current === "light" || current === "dark") return current;
  return "dark";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Lazy-init from the DOM so we pick up whatever the inline boot script
  // already set (localStorage or system preference) on the very first
  // render, instead of defaulting to "dark" and then flashing to the real
  // theme a tick later once a mount effect corrects it.
  const [theme, setThemeState] = useState<Theme>(() => readTheme());

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("mizan-theme", theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  const setTheme = useCallback((t: Theme) => setThemeState(t), []);
  const toggle = useCallback(
    () => setThemeState((t) => (t === "dark" ? "light" : "dark")),
    [],
  );

  const value = useMemo(() => ({ theme, toggle, setTheme }), [theme, toggle, setTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
