export const REVIEW_QUERY_KEY = {
  ALL: ['reviews'],
  LIST: (track?: string, term?: number) =>
    [...REVIEW_QUERY_KEY.ALL, track ?? 'ALL', term ?? 'ALL'] as const,
} as const;
