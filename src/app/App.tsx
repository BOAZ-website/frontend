import { Suspense } from 'react';
// import { RouterProvider } from 'react-router/dom'; // 잠시 주석 처리

import { QueryProvider } from '@/shared/providers/QueryProvider';
import { ThemeProvider } from '@/shared/providers/ThemeProvider';
// import { router } from '@/shared/router/router'; // 잠시 주석 처리

import Card from '@/shared/components/track-card/trackcard'; // 💥 Card 컴포넌트 임포트!

import '@/shared/styles/reset.css';
import '@/shared/styles/global.css';

function App() {
  return (
    <ThemeProvider>
      <QueryProvider>
        <Suspense fallback={<div>Loading...</div>}>
          {/* 라우터 대신 카드 한 장을 직접 띄웁니다 */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100vh',
              backgroundColor: '#f0f0f0' // 카드 구분이 잘 되도록 배경색 추가
          }}>
            <Card 
              title="데이터 분석"
              description="나만의 인공지능을 만들어봐요~~~~~"
              backTitle="Data Analysis 뒷면"
              backDescription="/* 예시 문구 */"
            />
          </div>
          
          {/* 테스트가 끝나면 다시 아래 주석을 풀고 카드를 지우면 돼요! */}
          {/* <RouterProvider router={router} /> */}
        </Suspense>
      </QueryProvider>
    </ThemeProvider>
  );
}

export default App;