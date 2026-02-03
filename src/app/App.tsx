import { RouterProvider } from 'react-router/dom';

import { router } from '@/app/providers';
import { QueryProvider } from '@/shared/providers/QueryProvider';

import './styles/global.css.ts';

function App() {
  return (
    <QueryProvider>
      <RouterProvider router={router} />
    </QueryProvider>
  );
}

export default App;
