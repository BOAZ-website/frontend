import { createBrowserRouter, Outlet } from 'react-router';
import { TabBar } from '@/widgets/tab-bar';

// TODO: 에러 페이지 추가 예정
import { HomePage } from '@/shared/router/lazy';
import { ROUTE_PATH } from '@/shared/router/path';

export const router = createBrowserRouter([
  {
    path: ROUTE_PATH.HOME,
    element: (
      <>
        <TabBar handleApplyClick={() => console.log('지원하기 클릭!')} />
        <main>
          <Outlet />
        </main>
      </>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
    // Component: HomePage,
  },
]);
