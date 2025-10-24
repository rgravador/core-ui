import './variables.css';

export type ThemeMode = 'light' | 'dark';

export interface ThemeContextType {
  mode: ThemeMode;
  toggleTheme: () => void;
  setTheme: (mode: ThemeMode) => void;
}

// Utility function to apply theme
export const applyTheme = (mode: ThemeMode) => {
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', mode);
  }
};

// Utility function to get current theme
export const getCurrentTheme = (): ThemeMode => {
  if (typeof document !== 'undefined') {
    return (document.documentElement.getAttribute('data-theme') as ThemeMode) || 'light';
  }
  return 'light';
};
