import { FormControlLabel } from '@mui/material';
import Switch from '@mui/material/Switch';
import { useContext, useEffect } from 'react';
import ThemeContext from '../../context/ThemeContext';
import useTitle from '../../hooks/useTitle';

export default function Settings() {
  useTitle('Settings');
  const { paletteMode, setPaletteMode } = useContext(ThemeContext);

  useEffect(() => {
    localStorage.setItem('theme', paletteMode);
  }, [paletteMode]);

  return (
    <FormControlLabel
      labelPlacement="start"
      control={
        <Switch
          checked={paletteMode === 'dark'}
          onChange={() => setPaletteMode(paletteMode === 'dark' ? 'light' : 'dark')}
        />
      }
      label="Dark theme"
    />
  );
}
