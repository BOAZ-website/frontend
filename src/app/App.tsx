import { Suspense } from 'react';
import { RouterProvider } from 'react-router/dom';

import Dropdown from '@/shared/components/dropdown/dropdown'; // 1. 드롭다운 import (경로 확인!)
import { QueryProvider } from '@/shared/providers/QueryProvider';
import { ThemeProvider } from '@/shared/providers/ThemeProvider';
import { router } from '@/shared/router/router';

import '@/shared/styles/reset.css';
import '@/shared/styles/global.css';

function App() {
  // 테스트용 데이터
  const monthOptions = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];

  return (
    <ThemeProvider>
      <QueryProvider>
        {/* 2. 드롭다운 확인용 임시 레이아웃 */}
        <div style={{ 
          padding: '5rem', 
          backgroundColor: '#000', // 배경이 어두워야 드롭다운이 잘 보여요
          minHeight: '50vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start'
        }}>
          <div style={{ width: '28rem' }}> {/* 드롭다운 너비 고정 */}
            <Dropdown 
              options={monthOptions} 
              onSelect={(val) => console.log('선택된 달:', val)} 
            />
          </div>
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <RouterProvider router={router} />
        </Suspense>
      </QueryProvider>
    </ThemeProvider>
  );
}

export default App;