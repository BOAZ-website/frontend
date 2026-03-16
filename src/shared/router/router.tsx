import { createBrowserRouter } from 'react-router';

// TODO: 에러 페이지 추가 예정
import { HomePage } from '@/shared/router/lazy';
import { ROUTE_PATH } from '@/shared/router/path';

export const router = createBrowserRouter([
  {
    path: ROUTE_PATH.HOME,
    Component: HomePage,
  },
]);
