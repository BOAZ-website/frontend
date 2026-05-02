import { get } from '@/shared/api/client';
import { END_POINT } from '@/shared/api/end-point';
import type { FaqResponse } from '@/shared/api/types';

type FaqCategory = 'RECRUITMENT' | 'ACTIVITY' | 'ETC';

export const getFaqs = async (category: FaqCategory): Promise<FaqResponse[]> =>
  get<FaqResponse[]>(END_POINT.ARCHIVING.GET_FAQS, {
    params: { category },
  });
