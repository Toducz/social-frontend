import { Global } from '@emotion/react';
import Container from '@mui/material/Container';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DefaultThemeProvider } from '../../provider/DefaultThemeProvider';
import { TitleProvider } from '../../provider/TitleProvider';
import Frame from './Frame';

export default function PageLayout() {
  return (
    <DefaultThemeProvider>
      <Global
        styles={{
          '*': {
            fontFamily: 'Libre Franklin, sans-serif !important',
          },
          a: {
            textDecoration: 'none !important',
          },
        }}
      />
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <TitleProvider>
          <Container>
            <Frame />
          </Container>
          <ReactQueryDevtools initialIsOpen={false} />
        </TitleProvider>
      </LocalizationProvider>
    </DefaultThemeProvider>
  );
}
