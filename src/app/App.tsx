import { Suspense } from 'react';
import { RouterProvider } from 'react-router/dom';

import { QueryProvider } from '@/app/providers/QueryProvider';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { router } from '@/shared/router/router';

import '@/shared/styles/reset.css';
import '@/shared/styles/global.css';

function App() {
  return (
    <ThemeProvider>
      <QueryProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <RouterProvider router={router} />
        </Suspense>
      </QueryProvider>
    </ThemeProvider>
  );
}

export default App;
