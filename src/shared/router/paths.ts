export const ROUTE_PATH = {
  HOME: '/',
} as const;

export type Routes = (typeof ROUTE_PATH)[keyof typeof ROUTE_PATH];
