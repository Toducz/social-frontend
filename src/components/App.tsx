import { Global } from '@emotion/react';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Frame from '../pages/appframe/Frame';
import ForgetPassword from '../pages/auth/ForgetPassword';
import SignIn from '../pages/auth/SignIn';
import SignUp from '../pages/auth/SignUp';
import GamesPage from '../pages/Game/GamesPage';
import Settings from '../pages/settings/Settings';
import { DefaultThemeProvider } from '../provider/DefaultThemeProvider';
import { TitleProvider } from '../provider/TitleProvider';

const defaultDarkTheme = createTheme({
  palette: {
    mode: 'dark',
    // Other palette properties like primary, secondary, background, etc.
  },
  // Other theme properties like typography, spacing, etc.
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: 1000 * 120,
      staleTime: 1000 * 60,
    },
  },
});

function App() {
  const theme = useTheme();

  console.log(theme);
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
                  <Route path="/test" element={<GamesPage />} />
                </Route>
                <Route path="*" element={<Navigate to="/signIn" replace />} />
              </Routes>
            </Container>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </TitleProvider>
      </BrowserRouter>
    </DefaultThemeProvider>
  );
}

export default App;
