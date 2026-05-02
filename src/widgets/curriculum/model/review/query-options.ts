import { queryOptions } from '@tanstack/react-query';

import { getReviews } from '@/shared/api/review';
import type { ReviewResponse } from '@/shared/api/types';

import { REVIEW_QUERY_KEY } from './query-key';

type ReviewParams = Parameters<typeof getReviews>[0];

export const REVIEW_QUERY_OPTIONS = {
  LIST: (params?: ReviewParams) =>
    queryOptions<ReviewResponse[]>({
      queryKey: REVIEW_QUERY_KEY.LIST(params?.track, params?.term),
      queryFn: () => getReviews(params),
    }),
};
