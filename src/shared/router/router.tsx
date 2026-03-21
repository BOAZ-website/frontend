import { createBrowserRouter } from 'react-router';

// TODO: 에러 페이지 추가 예정
import {
  ArchivePage,
  CurriculumPage,
  FAQPage,
  HomePage,
  RecruitingPage,
} from '@/shared/router/lazy';
import { ROUTE_PATH } from '@/shared/router/paths';

export const router = createBrowserRouter([
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
]);
