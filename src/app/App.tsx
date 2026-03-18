import { Suspense } from 'react';
import { RouterProvider } from 'react-router/dom';

import Card from '@/shared/components/track-card'; // 1. 카드 컴포넌트 import (경로 확인!)
import { QueryProvider } from '@/shared/providers/QueryProvider';
import { ThemeProvider } from '@/shared/providers/ThemeProvider';
import { router } from '@/shared/router/router';

import '@/shared/styles/reset.css';
import '@/shared/styles/global.css';

// App.tsx
function App() {
  return (
    <ThemeProvider>
      <QueryProvider>
        {/* 모든 걸 무시하고 카드만 띄워서 확인! */}
        <div style={{ 
          padding: '10rem 5rem', 
          backgroundColor: '#000', 
          minHeight: '100vh',
          display: 'flex',
          gap: '2.4rem',
          justifyContent: 'center',
          position: 'fixed', // 화면 전체를 덮도록 고정
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999 // 다른 어떤 요소보다 위에
        }}>
          <Card 
            title="데이터 분석" 
            description="나만의 인공지능을 만들어봐요 데이터분석 소개글~~~~~~" 
          />
        </div>

        {/* 잠시 주석 처리해서 라우터 영향 제거 */}
        {/* <Suspense fallback={<div>Loading...</div>}>
          <RouterProvider router={router} />
        </Suspense> */}
      </QueryProvider>
    </ThemeProvider>
  );
}

export default App;