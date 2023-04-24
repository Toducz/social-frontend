import { createTheme, CssBaseline, PaletteMode } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { ReactNode, useMemo, useState } from 'react';
import ThemeContext, { ThemeContextType } from '../context/ThemeContext';

const defaultDarkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const defaultLightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

type Props = {
  children: ReactNode;
};

export function DefaultThemeProvider({ children }: Props) {
  const currentTheme = localStorage.getItem('theme') as PaletteMode;
  const [paletteMode, setPaletteMode] = useState<PaletteMode>(currentTheme ?? 'light');
  const themeContext = useMemo<ThemeContextType>(() => ({ paletteMode, setPaletteMode }), [paletteMode]);
  return (
    <ThemeContext.Provider value={themeContext}>
      <ThemeProvider theme={paletteMode === 'light' ? defaultLightTheme : defaultDarkTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
