import { PaletteMode } from '@mui/material';
import { createContext } from 'react';

export type ThemeContextType = {
  paletteMode: PaletteMode;
  setPaletteMode: (paletteMode: PaletteMode) => unknown;
};

const ThemeContext = createContext<ThemeContextType>(undefined);

export default ThemeContext;
