export const APPLY_QUERY_KEY = {
  QUESTIONS: (recruitmentId: number, track: string) =>
    ['recruitment', 'questions', recruitmentId, track] as const,
};
