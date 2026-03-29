export const RECRUITMENT_QUERY_KEY = {
  ALL: ['recruitment'],
  STATUS: () => [...RECRUITMENT_QUERY_KEY.ALL, 'status'],
  DETAIL: (term: number) => [...RECRUITMENT_QUERY_KEY.ALL, 'detail', term],
} as const;
