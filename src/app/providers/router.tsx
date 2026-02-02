import { lazy, Suspense } from 'react';
import { ROUTE_PATH } from '@shared/routes/path';
import { createBrowserRouter } from 'react-router';

import LoginPage from '@/pages/loginPage';

import { GlobalLayout } from '../layouts/GlobalLayout';

const HomePage = lazy(() => import('@/pages/homePage'));

export const router = createBrowserRouter([
  {
    element: <GlobalLayout />,
    children: [
      {
        path: ROUTE_PATH.HOME,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: ROUTE_PATH.LOGIN,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LoginPage />
          </Suspense>
        ),
      },
    ],
  },
]);
