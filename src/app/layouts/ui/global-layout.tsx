import { Suspense } from 'react';
import { Outlet } from 'react-router';

export const GlobalLayout = () => {
  return (
    <>
      {/* <Header /> */}
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      {/* <Footer /> */}
    </>
  );
};
