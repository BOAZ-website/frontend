import { get } from '@/shared/api/client';
import { END_POINT } from '@/shared/api/end-point';
import type { CurriculumResponse } from '@/shared/api/types';

export const getCurriculums = async (
  track?: 'ALL' | 'ANALYSIS' | 'VISUALIZATION' | 'ENGINEERING'
): Promise<CurriculumResponse[]> =>
  get<CurriculumResponse[]>(END_POINT.CURRICULUM.GET_CURRICULUMS, {
    params: track ? { track } : undefined,
  });
