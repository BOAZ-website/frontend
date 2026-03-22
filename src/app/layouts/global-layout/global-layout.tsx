import { Suspense } from 'react';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { Outlet } from 'react-router';

import TabBar from '@/widgets/tab-bar/ui/tab-bar';
import Footer from '@/shared/components/footer/footer';

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
      </div>
    </QueryErrorResetBoundary>
  );
};
