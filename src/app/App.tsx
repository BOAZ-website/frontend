import { RouterProvider } from 'react-router';

import { router } from '@/app/providers';
import { QueryProvider } from '@/shared/providers/QueryProvider';

import './styles/global.css';

function App() {
  return (
    <QueryProvider>
      <RouterProvider router={router} />
    </QueryProvider>
  );
}

export default App;
