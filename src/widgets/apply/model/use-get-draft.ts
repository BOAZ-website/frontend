import { useQuery } from '@tanstack/react-query';

import { getMyApplication } from '@/shared/api/recruitment';
import type { MyApplicationResponse } from '@/shared/api/types';
import { HTTP_STATUS } from '@/shared/constant/http-status';
import { isAxiosError } from '@/shared/utils/is-axios-error';

export const DRAFT_QUERY_KEY = {
  MY_APPLICATION: (recruitmentId: number) =>
    ['recruitment', 'my-application', recruitmentId] as const,
};

export type DraftQueryState =
  | { state: 'loading' }
  | { state: 'empty' } // apply-draft (로컬스토리지) fallback
  | { state: 'submitted' } // 제출 완료
  | { state: 'draft'; data: MyApplicationResponse }; // draft 복원

export const useGetDraft = (recruitmentId: number): DraftQueryState => {
  const { data, isLoading, error } = useQuery<MyApplicationResponse>({
    queryKey: DRAFT_QUERY_KEY.MY_APPLICATION(recruitmentId),
    queryFn: () => getMyApplication(recruitmentId),
    enabled: recruitmentId > 0,
    refetchOnWindowFocus: false,
    retry: false,
  });

  if (isLoading) {
    return { state: 'loading' };
  }

  if (error) {
    if (isAxiosError(error) && error.response) {
      if (error.response.status === HTTP_STATUS.NOT_FOUND) {
        return { state: 'empty' };
      }
      if (error.response.status === HTTP_STATUS.FORBIDDEN) {
        return { state: 'submitted' };
      }
    }
    return { state: 'empty' };
  }

  if (data) {
    return { state: 'draft', data };
  }

  return { state: 'empty' };
};
