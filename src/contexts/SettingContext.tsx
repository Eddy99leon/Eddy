import { createContext, useContext, useEffect, useState } from "react";

export type Color = "green" | "blue" | "orange" | "violet" | "yellow" | "red";
export type BorderRadius = "none" | "sm" | "md" | "lg" | "xl";
export type Theme = "light" | "dark" | "system";

type SettingProviderProps = {
  children: React.ReactNode;
  defaultColor?: Color;
  defaultBorderRadius?: BorderRadius;
  defaultTheme?: Theme;
  storageKey?: string;
};

type SettingProviderState = {
  color: Color;
  borderRadius: BorderRadius;
  theme: Theme;
  setColor: (color: Color) => void;
  setBorderRadius: (borderRadius: BorderRadius) => void;
  setTheme: (theme: Theme) => void;
};

const initialState: SettingProviderState = {
  color: "blue",
  borderRadius: "md",
  theme: "light",
  setColor: () => null,
  setBorderRadius: () => null,
  setTheme: () => null,
};

const SettingContext = createContext<SettingProviderState>(initialState);

export function SettingProvider({
  children,
  defaultColor = "blue",
  defaultBorderRadius = "md",
  defaultTheme = "light",
  storageKey = "eddy-ui",
  ...props
}: SettingProviderProps) {
  const [color, setColor] = useState<Color>(
    () => (localStorage.getItem(storageKey) as Color) || defaultColor
  );
  const [borderRadius, setBorderRadius] = useState<BorderRadius>(defaultBorderRadius);
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(`${storageKey}-theme`) as Theme) || defaultTheme
  );

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("green", "blue", "orange", "violet", "yellow", "red");
    root.classList.add(color);

    root.classList.remove("none", "sm", "md", "lg", "xl");
    root.classList.add(borderRadius);

    root.classList.remove("light", "dark");
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches 
        ? "dark" 
        : "light";
      root.classList.add(systemTheme);
    } else {
        root.classList.add(theme);
    }
  }, [color, borderRadius, theme]);

  const value = {
    color,
    borderRadius,
    theme,
    setColor: (color: Color) => {
      localStorage.setItem(`${storageKey}-color`, color);
      setColor(color);
    },
    setBorderRadius: (borderRadius: BorderRadius) => {
      localStorage.setItem(`${storageKey}-border-radius`, borderRadius);
      setBorderRadius(borderRadius);
    },
    setTheme: (theme: Theme) => {
      localStorage.setItem(`${storageKey}-theme`, theme);
      setTheme(theme);
    },
  };

  return (
    <SettingContext.Provider {...props} value={value}>
      {children}
    </SettingContext.Provider>
  );
}

export const useSetting = () => {
  const context = useContext(SettingContext);

  if (context === undefined)
    throw new Error("useSetting must be used within a SettingProvider");

  return context;
};
