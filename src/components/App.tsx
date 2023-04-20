import { Global } from '@emotion/react';
import { Container } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Frame from '../pages/appframe/Frame';
import ForgetPassword from '../pages/auth/ForgetPassword';
import SignIn from '../pages/auth/SignIn';
import SignUp from '../pages/auth/SignUp';
import Test from '../pages/test/Test';
import { TitleProvider } from '../provider/TitleProvider';

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
    <>
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
                  <Route path="/test" element={<Test />} />
                </Route>
                <Route path="*" element={<Navigate to="/signIn" replace />} />
              </Routes>
            </Container>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </TitleProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
