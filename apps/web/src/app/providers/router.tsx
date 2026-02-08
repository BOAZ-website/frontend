import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';

import { GlobalLayout } from '../layouts/ui/GlobalLayout';

import { ROUTE_PATH } from '@/shared/configs/path';

const HomePage = lazy(() => import('@/pages/HomePage'));
const LoginPage = lazy(() => import('@/pages/LoginPage'));

export const router = createBrowserRouter([
  {
    Component: GlobalLayout,
    children: [
      {
        path: ROUTE_PATH.HOME,
        Component: HomePage,
      },
      {
        path: ROUTE_PATH.LOGIN,
        Component: LoginPage,
      },
    ],
  },
]);
