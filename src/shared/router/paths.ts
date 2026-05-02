export const ROUTE_PATH = {
  HOME: '/',
  CURRICULUM: '/curriculum',
  RECRUITING: '/recruiting',
  ARCHIVE: '/archive',
  FAQ: '/faq',
  APPLY: '/apply', // 페이지 추가
} as const;

export type Routes = (typeof ROUTE_PATH)[keyof typeof ROUTE_PATH];
