import { createBrowserRouter } from 'react-router';
import { HomePage } from '@/shared/router/lazy';
import { ROUTE_PATH } from '@/shared/router/path';

export const router = createBrowserRouter([
  {
    path: ROUTE_PATH.HOME,
    Component: HomePage,
  },
]);
