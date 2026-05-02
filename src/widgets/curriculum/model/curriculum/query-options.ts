import { queryOptions } from '@tanstack/react-query';

import { getCurriculums } from '@/shared/api/curriculum';
import type { CurriculumResponse } from '@/shared/api/types';

import { CURRICULUM_QUERY_KEY } from './query-key';

type TrackParam = Parameters<typeof getCurriculums>[0];

export const CURRICULUM_QUERY_OPTIONS = {
  LIST: (track?: TrackParam) =>
    queryOptions<CurriculumResponse[]>({
      queryKey: CURRICULUM_QUERY_KEY.LIST(track),
      queryFn: () => getCurriculums(track),
    }),
};
