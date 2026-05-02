import { get } from '@/shared/api/client';
import { END_POINT } from '@/shared/api/end-point';
import type { ReviewResponse } from '@/shared/api/types';

export const getReviews = async (params?: {
  track?: 'ALL' | 'ANALYSIS' | 'VISUALIZATION' | 'ENGINEERING';
  term?: number;
}): Promise<ReviewResponse[]> =>
  get<ReviewResponse[]>(END_POINT.REVIEW.GET_REVIEWS, {
    params,
  });
