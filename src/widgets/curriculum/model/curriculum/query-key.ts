export const CURRICULUM_QUERY_KEY = {
  ALL: ['curriculums'],
  LIST: (track?: string) => [...CURRICULUM_QUERY_KEY.ALL, track ?? 'ALL'],
} as const;
