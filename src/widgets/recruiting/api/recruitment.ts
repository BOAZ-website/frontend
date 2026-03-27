import { get } from '@/shared/api/client';
import { END_POINT } from '@/shared/api/end-point';
import type { RecruitmentResponse, RecruitmentStatusResponse } from '@/shared/api/types';

export const getRecruitmentStatus = async (): Promise<RecruitmentStatusResponse> => {
  return get<RecruitmentStatusResponse>(END_POINT.RECRUITMENT.GET_STATUS);
};

export const getRecruitment = async (term: number): Promise<RecruitmentResponse> => {
  const endpoint = END_POINT.RECRUITMENT.GET_DETAIL.replace('{term}', String(term));
  return get<RecruitmentResponse>(endpoint);
};
