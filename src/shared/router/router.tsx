import { createBrowserRouter } from 'react-router';

// TODO: 에러 페이지 추가 예정
import { HomePage } from '@/shared/router/lazy';
import { ROUTE_PATH } from '@/shared/router/path';

// 리뷰 카드 확인용 임시 코드
import ReviewListPage from '@/shared/components/reviewCard/review-list-page';

export const router = createBrowserRouter([
  {
    path: ROUTE_PATH.HOME,
    Component: HomePage,
  },
  {
    //path: ROUTE_PATH.REVIEW, // '/review' 주소
    path: '/review', // '/review' 주소
    Component: ReviewListPage, // 보여줄 컴포넌트
  },
]);
