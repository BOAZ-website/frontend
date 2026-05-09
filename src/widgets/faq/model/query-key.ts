export const FAQ_QUERY_KEY = {
  ALL: ['faqs'],
  LIST: (category: string) => [...FAQ_QUERY_KEY.ALL, category] as const,
} as const;
