import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
} from 'react';
import { useColorScheme } from 'react-native';
import { createMMKV } from 'react-native-mmkv';
import { lightTheme, darkTheme, Theme } from './theme';

type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeContextType extends Theme {
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
}

const storage = createMMKV();
const THEME_STORAGE_KEY = 'user_theme_mode';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const systemColorScheme = useColorScheme();
  const [themeMode, setThemeModeState] = useState<ThemeMode>('system');
  const [isDarkMode, setIsDarkMode] = useState(systemColorScheme === 'dark');

  useEffect(() => {
    const storedTheme = storage.getString(THEME_STORAGE_KEY) as ThemeMode;
    if (storedTheme) {
      setThemeModeState(storedTheme);
    }
  }, [systemColorScheme]);

  useEffect(() => {
    if (themeMode === 'system') {
      setIsDarkMode(systemColorScheme === 'dark');
    } else {
      setIsDarkMode(themeMode === 'dark');
    }
  }, [systemColorScheme, themeMode]);

  const setThemeMode = (mode: ThemeMode) => {
    setThemeModeState(mode);
    storage.set(THEME_STORAGE_KEY, mode);
  };

  const theme = useMemo(() => {
    let isDark = false;
    if (themeMode === 'system') {
      isDark = systemColorScheme === 'dark';
    } else {
      isDark = themeMode === 'dark';
    }
    return isDark ? darkTheme : lightTheme;
  }, [themeMode, systemColorScheme]);

  const value = useMemo(
    () => ({
      ...theme,
      themeMode,
      isDarkMode,
      setThemeMode,
    }),
    [theme, themeMode, isDarkMode],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
