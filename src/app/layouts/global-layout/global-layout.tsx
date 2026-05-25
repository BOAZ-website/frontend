import { Suspense } from 'react';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { Outlet } from 'react-router';

import Footer from '@/widgets/common/ui/footer/footer';
import TabBar from '@/widgets/common/ui/tab-bar/tab-bar';
import LoginOverlay from '@/features/auth/ui/login-overlay';

import * as styles from './global-layout.css';

export const GlobalLayout = () => {
  return (
    <QueryErrorResetBoundary>
      <div className={styles.layout}>
        <TabBar />
        <main className={styles.main}>
          <Suspense fallback={<>Loading...</>}>
            <Outlet />
          </Suspense>
        </main>
        <Footer />
        <LoginOverlay />
      </div>
    </QueryErrorResetBoundary>
  );
};
