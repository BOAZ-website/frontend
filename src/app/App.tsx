import { Suspense } from 'react';
import { RouterProvider } from 'react-router/dom';
import { router } from '@/shared/router/router';
import { QueryProvider } from '@/shared/providers/QueryProvider';

function App() {
  return (
    <QueryProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </QueryProvider>
  );
}

export default App;
