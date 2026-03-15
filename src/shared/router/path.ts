export const ROUTE_PATH = {
  HOME: '/',
  // 페이지 추가
  CURRICULUM: '/curriculum',
} as const;

export type Routes = (typeof ROUTE_PATH)[keyof typeof ROUTE_PATH];
