import { Global } from '@emotion/react';
import Container from '@mui/material/Container';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DefaultThemeProvider } from '../../provider/DefaultThemeProvider';
import { TitleProvider } from '../../provider/TitleProvider';
import ForgetPassword from '../auth/ForgetPassword';
import SignIn from '../auth/SignIn';
import SignUp from '../auth/SignUp';
import GamesPage from '../Game/GamesPage';
import NewGame from '../Game/NewGame';
import Settings from '../settings/Settings';
import Frame from './Frame';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: 1000 * 120,
      staleTime: 1000 * 60,
    },
  },
});

function App() {
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
        <BrowserRouter>
          <TitleProvider>
            <QueryClientProvider client={queryClient}>
              <Container>
                <Routes>
                  <Route path="/signIn" element={<SignIn />} />
                  <Route path="/signUp" element={<SignUp />} />
                  <Route path="/forgetPassword" element={<ForgetPassword />} />
                  <Route element={<Frame />}>
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/games" element={<GamesPage />} />
                    <Route path="/games/newGame" element={<NewGame />} />
                  </Route>
                  <Route path="*" element={<Navigate to="/signIn" replace />} />
                </Routes>
              </Container>
              <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
          </TitleProvider>
        </BrowserRouter>
      </LocalizationProvider>
    </DefaultThemeProvider>
  );
}

export default App;
