import { useMutation } from '@tanstack/react-query';

import { saveDraftApi } from '@/shared/api/recruitment';
import type { DraftRequest } from '@/shared/api/types';

interface UsePutDraftParams {
  recruitmentId: number;
  onSuccess?: () => void;
  onError?: () => void;
}

export const usePutDraft = ({ recruitmentId, onSuccess, onError }: UsePutDraftParams) => {
  const { mutate: putDraft, isPending: isPutDraftPending } = useMutation({
    mutationFn: (data: DraftRequest) => saveDraftApi(recruitmentId, data),
    onSuccess: () => {
      // TODO: 토스트 컴포넌트로 교체
      alert('임시저장이 완료되었습니다.');
      onSuccess?.();
    },
    onError: () => {
      // TODO: 토스트 컴포넌트로 교체
      alert('임시저장에 실패했습니다. 다시 시도해 주세요.');
      onError?.();
    },
  });

  return { putDraft, isPutDraftPending };
};
