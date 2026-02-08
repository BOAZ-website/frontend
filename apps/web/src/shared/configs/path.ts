export const ROUTE_PATH = {
  HOME: '/',
  LOGIN: '/login',
  LOGIN_CALLBACK: '/oauth/callback',
} as const;

export type Routes = (typeof ROUTE_PATH)[keyof typeof ROUTE_PATH];
