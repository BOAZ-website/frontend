import { get, post } from '@/shared/api/client';
import { END_POINT } from '@/shared/api/end-point';
import type {
  ApplicationRequest,
  ApplicationResponse,
  DeadlineResponse,
  QuestionResponse,
} from '@/shared/api/types';

export const getDeadline = async (): Promise<DeadlineResponse> =>
  get<DeadlineResponse>(END_POINT.RECRUITMENT.GET_DEADLINE);

export const getQuestions = async (
  recruitmentId: number,
  track: ApplicationRequest['track']
): Promise<QuestionResponse[]> =>
  get<QuestionResponse[]>(END_POINT.RECRUITMENT.GET_QUESTIONS, {
    params: { recruitmentId, track },
  });

export const submitApplication = async (data: ApplicationRequest): Promise<ApplicationResponse> =>
  post<ApplicationResponse>(END_POINT.RECRUITMENT.POST_APPLICATION, data);
