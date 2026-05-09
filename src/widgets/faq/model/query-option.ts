import { queryOptions } from '@tanstack/react-query';

import { getFaqs } from '@/shared/api/faq';
import type { FaqResponse } from '@/shared/api/types';

import { FAQ_QUERY_KEY } from './query-key';

type FaqCategory = Parameters<typeof getFaqs>[0];

export const FAQ_QUERY_OPTIONS = {
  LIST: (category: FaqCategory) =>
    queryOptions<FaqResponse[]>({
      queryKey: FAQ_QUERY_KEY.LIST(category),
      queryFn: () => getFaqs(category),
    }),
};
