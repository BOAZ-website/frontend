import { HomePage } from '@/shared/router/lazy';
import { ROUTE_PATH } from '@/shared/router/path';

export const globalRoutes = [
  {
    path: ROUTE_PATH.HOME,
    Component: HomePage,
  },
  // 페이지 추가
];
