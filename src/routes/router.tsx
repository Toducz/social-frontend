import { createBrowserRouter } from 'react-router-dom';
import { PUBLIC_URL } from '../constants/constants';
import GamesPage from '../pages/Game/GamesPage';
import NewGame from '../pages/Game/NewGame';
import PageLayout from '../pages/appframe/PageLayout';
import ForgetPassword from '../pages/auth/ForgetPassword';
import SignIn from '../pages/auth/SignIn';
import SignUp from '../pages/auth/SignUp';
import ErrorPage from '../pages/error/ErrorPage';
import Settings from '../pages/settings/Settings';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/signIn',
          element: <SignIn />,
        },
        {
          path: '/signUp',
          element: <SignUp />,
        },
        {
          path: '/forgetPassword',
          element: <ForgetPassword />,
        },
        {
          path: '/',
          element: <PageLayout />,
          children: [
            {
              path: '/settings',
              element: <Settings />,
            },
            {
              path: '/games',
              element: <GamesPage />,
            },
            {
              path: '/games/createGame',
              element: <NewGame />,
            },
          ],
        },
      ],
    },
  ],
  {
    basename: PUBLIC_URL,
  },
);
