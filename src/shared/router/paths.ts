export const ROUTE_PATH = {
  HOME: '/',
  CURRICULUM: '/curriculum',
  RECRUITING: '/recruiting',
  ARCHIVE: '/archive',
  FAQ: '/faq',
  APPLY: '/apply',
  LOGIN: '/login',
  AUTH_CALLBACK: '/auth/callback',
} as const;

export type Routes = (typeof ROUTE_PATH)[keyof typeof ROUTE_PATH];
