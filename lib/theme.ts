import { create } from "zustand";

export type ThemeName =
  | "ethereum"
  | "bitcoin"
  | "binance"
  | "solana"
  | "chainlink"
  | "tron";

export interface ThemeState {
  theme: ThemeName;
  setTheme: (nextTheme: ThemeName) => void;
}

export const DEFAULT_THEME: ThemeName = "ethereum";
export const THEME_STORAGE_KEY = "app-theme";

const ALL_THEMES: ThemeName[] = [
  "ethereum",
  "bitcoin",
  "binance",
  "solana",
  "chainlink",
  "tron",
];

export function getStoredTheme(): ThemeName | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (!raw) return null;
    if (ALL_THEMES.includes(raw as ThemeName)) return raw as ThemeName;
    return null;
  } catch {
    return null;
  }
}

export function storeTheme(theme: ThemeName): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    /* ignore */
  }
}

export function applyThemeToDocument(theme: ThemeName): void {
  if (typeof document === "undefined") return;
  const body = document.body;
  for (const name of ALL_THEMES) {
    body.classList.remove(`theme-${name}`);
  }
  body.classList.add(`theme-${theme}`);
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: DEFAULT_THEME,
  setTheme: (nextTheme) => {
    set({ theme: nextTheme });
    storeTheme(nextTheme);
    applyThemeToDocument(nextTheme);
  },
}));

// Call this on the client (e.g., from a small client-only wrapper) to
// initialize the store and apply the saved theme to <body>.
export function initializeTheme(): ThemeName {
  const stored = getStoredTheme();
  const themeToUse = stored ?? DEFAULT_THEME;
  useThemeStore.setState({ theme: themeToUse });
  applyThemeToDocument(themeToUse);
  return themeToUse;
}


