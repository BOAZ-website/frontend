import { createBrowserRouter } from 'react-router';

import { GlobalLayout } from '@/app/layouts/global-layout/global-layout';
import AuthCallbackPage from '@/pages/auth-callback-page';
import {
  ApplyPage,
  ArchivePage,
  CurriculumPage,
  FAQPage,
  HomePage,
  PrivacyPage,
  RecruitingPage,
} from '@/shared/router/lazy';
import { ROUTE_PATH } from '@/shared/router/paths';

import ProtectedRoute from './protected-route';

export const router = createBrowserRouter([
  {
    Component: GlobalLayout,
    children: [
      { path: ROUTE_PATH.HOME, Component: HomePage },
      { path: ROUTE_PATH.CURRICULUM, Component: CurriculumPage },
      { path: ROUTE_PATH.RECRUITING, Component: RecruitingPage },
      { path: ROUTE_PATH.ARCHIVE, Component: ArchivePage },
      { path: ROUTE_PATH.FAQ, Component: FAQPage },
      { path: ROUTE_PATH.PRIVACY, Component: PrivacyPage },
      {
        Component: ProtectedRoute,
        children: [{ path: ROUTE_PATH.APPLY, Component: ApplyPage }],
      },
    ],
  },
  { path: ROUTE_PATH.AUTH_CALLBACK, Component: AuthCallbackPage },
]);
