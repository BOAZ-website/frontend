import { queryOptions } from '@tanstack/react-query';

import { getRecruitment, getRecruitmentStatus } from '@/widgets/recruiting/api/recruitment';

import { RECRUITMENT_QUERY_KEY } from './recruitment.query-key';

export const RECRUITMENT_QUERY_OPTIONS = {
  STATUS: () =>
    queryOptions({
      queryKey: RECRUITMENT_QUERY_KEY.STATUS(),
      queryFn: getRecruitmentStatus,
    }),

  DETAIL: (term: number) =>
    queryOptions({
      queryKey: RECRUITMENT_QUERY_KEY.DETAIL(term),
      queryFn: () => getRecruitment(term),
      enabled: !!term,
    }),
};
