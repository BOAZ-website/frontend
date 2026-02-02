import { Suspense } from 'react';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
// import { AppLayout } from '@widgets/layout';
import { Outlet } from 'react-router';

const GlobalLayout = () => {
  return (
    // <AppLayout>
    <QueryErrorResetBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </QueryErrorResetBoundary>
    // </AppLayout>
  );
};

export default GlobalLayout;
