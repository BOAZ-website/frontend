import { createBrowserRouter } from 'react-router';

import { GlobalLayout } from '@/app/layouts/global-layout/global-layout';
import {
  ArchivePage,
  CurriculumPage,
  FAQPage,
  HomePage,
  RecruitingPage,
  ApplyPage,
} from '@/shared/router/lazy';
import { ROUTE_PATH } from '@/shared/router/paths';

export const router = createBrowserRouter([
  {
    Component: GlobalLayout,
    children: [
      {
        path: ROUTE_PATH.HOME,
        Component: HomePage,
      },
      {
        path: ROUTE_PATH.CURRICULUM,
        Component: CurriculumPage,
      },
      {
        path: ROUTE_PATH.RECRUITING,
        Component: RecruitingPage,
      },
      {
        path: ROUTE_PATH.ARCHIVE,
        Component: ArchivePage,
      },
      {
        path: ROUTE_PATH.FAQ,
        Component: FAQPage,
      },
      {
        path: ROUTE_PATH.APPLY,
        Component: ApplyPage,
      }
    ],
  },
]);
