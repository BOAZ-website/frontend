import { Suspense } from 'react';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { Outlet } from 'react-router';

// import * as styles from './GlobalLayout.css';

export const GlobalLayout = () => {
  return (
    <QueryErrorResetBoundary>
      {/* <Header /> */}
      <Suspense fallback={<>Loading...</>}>
        <Outlet />
      </Suspense>
      {/* <Footer /> */}
    </QueryErrorResetBoundary>
  );
};
