import { get, post, put } from '@/shared/api/client';
import { END_POINT } from '@/shared/api/end-point';
import type {
  ApplicationRequest,
  ApplicationResponse,
  DeadlineResponse,
  DraftRequest,
  MyApplicationResponse,
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

export const submitApplication = async (
  recruitmentId: number,
  data: ApplicationRequest
): Promise<ApplicationResponse> =>
  post<ApplicationResponse>(
    END_POINT.RECRUITMENT.POST_APPLICATION.replace('{recruitmentId}', String(recruitmentId)),
    data
  );
export const getMyApplication = async (recruitmentId: number): Promise<MyApplicationResponse> =>
  get<MyApplicationResponse>(
    END_POINT.RECRUITMENT.GET_MY_APPLICATION.replace('{recruitmentId}', String(recruitmentId))
  );

export const saveDraftApi = async (
  recruitmentId: number,
  data: DraftRequest
): Promise<{ applicant_id: number }> =>
  put<{ applicant_id: number }>(
    END_POINT.RECRUITMENT.PUT_DRAFT.replace('{recruitmentId}', String(recruitmentId)),
    data
  );
