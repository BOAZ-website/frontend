import { RouterProvider } from 'react-router/dom';

import { QueryProvider } from '@/app/providers/query-provider';
import { ThemeProvider } from '@/app/providers/theme-provider';
import BlogCard from '@/shared/components/archive/blogcard';
import { router } from '@/shared/router/router';

import '@/shared/styles/reset.css';
import '@/shared/styles/global.css';

function App() {
  return (
    <ThemeProvider>
      <QueryProvider>
        <BlogCard
          category={'엔지니어링'}
          title={
            'Solve Scheduling problems in manufacturing system with Deep Reinforcement Learning '
          }
          description={
            '최근 인공지능 분야에서는 LLM, Computer Vision, Agent AI에 이르기까지, 다양한 영역에서 발달되고 있으며, VLM과 같은 Multi- modality 양한 영역에서 발달되고 있으며, VLM과 같은 Multi- modality...'
          }
          date={'Dec 28, 2025'}
        />
        {/*<RouterProvider router={router} /> */}
      </QueryProvider>
    </ThemeProvider>
  );
}

export default App;
