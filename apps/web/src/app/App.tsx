import { RouterProvider } from 'react-router/dom';

import './styles/global.css.ts';

import { router } from '@/app/providers';
import { QueryProvider } from '@/shared/providers/QueryProvider';

function App() {
  return (
    <QueryProvider>
      <RouterProvider router={router} />
    </QueryProvider>
  );
}

export default App;
