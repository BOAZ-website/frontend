import { Suspense } from 'react';
import { RouterProvider } from 'react-router/dom';

import { QueryProvider } from '@/shared/providers/QueryProvider';
import { router } from '@/shared/router/router';

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
