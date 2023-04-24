import { FormControlLabel } from '@mui/material';
import Switch from '@mui/material/Switch';
import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import useTitle from '../../hooks/useTitle';

export default function Settings() {
  useTitle('Settings');
  const { paletteMode, setPaletteMode } = useContext(ThemeContext);
  console.log(paletteMode);
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
