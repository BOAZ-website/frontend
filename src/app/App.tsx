import { Suspense } from 'react';

// import { RouterProvider } from 'react-router/dom'; // 잠시 주석 처리
import { QueryProvider } from '@/shared/providers/QueryProvider';
import { ThemeProvider } from '@/shared/providers/ThemeProvider';
import ValueCard from '@/shared/value-card/valuecard';

// import { router } from '@/shared/router/router'; // 잠시 주석 처리
import '@/shared/styles/reset.css';
import '@/shared/styles/global.css';

function App() {
  return (
    <ThemeProvider>
      <QueryProvider>
        <Suspense fallback={<div>Loading...</div>}>
          {/* 화면 중앙에 카드가 딱 보이도록 레이아웃을 잡았어요 */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
              backgroundColor: '#000', // 배경색은 디자인에 맞춰 조절하세요!
            }}
          >
            <ValueCard
              icon={<div style={{ width: '100%', height: '100%', backgroundColor: '#D9D9D9' }} />} // 임시 아이콘
            >
              <p>빅데이터에 관심이 있는</p>
              <p>대학생 및 대학원생</p>
            </ValueCard>
          </div>

          {/* 테스트가 끝나면 아래 주석을 풀고 위 div를 지우면 원래대로 돌아옵니다! */}
          {/* <RouterProvider router={router} /> */}
        </Suspense>
      </QueryProvider>
    </ThemeProvider>
  );
}

export default App;
