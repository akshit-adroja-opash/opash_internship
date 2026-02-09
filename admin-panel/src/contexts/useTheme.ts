import { useContext } from 'react';
import { ThemeContext } from './ThemeContextType';

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return { darkMode: context.darkMode, toggleDarkMode: context.toggleDarkMode };
};
