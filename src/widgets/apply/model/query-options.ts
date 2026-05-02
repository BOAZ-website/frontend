import { queryOptions } from '@tanstack/react-query';

import { getQuestions } from '@/shared/api/recruitment';
import type { ApplicationRequest } from '@/shared/api/types';

import { APPLY_QUERY_KEY } from './query-key';

export const APPLY_QUERY_OPTIONS = {
  QUESTIONS: (recruitmentId: number, track: ApplicationRequest['track']) =>
    queryOptions({
      queryKey: APPLY_QUERY_KEY.QUESTIONS(recruitmentId, track),
      queryFn: () => getQuestions(recruitmentId, track),
      enabled: recruitmentId > 0,
    }),
};
