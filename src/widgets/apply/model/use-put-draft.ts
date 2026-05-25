import { useEffect, useRef } from 'react';
import { useMutation } from '@tanstack/react-query';

import { saveDraftApi } from '@/shared/api/recruitment';
import type { DraftRequest } from '@/shared/api/types';

const SYNC_INTERVAL_MS = 15000; // 15초마다 동기화

interface UsePutDraftParams {
  recruitmentId: number;
  draft: DraftRequest;
  enabled: boolean;
  onSuccess?: () => void;
  onError?: () => void;
}

export const usePutDraft = ({
  recruitmentId,
  draft,
  enabled,
  onSuccess,
  onError,
}: UsePutDraftParams) => {
  const draftRef = useRef<DraftRequest>(draft);

  // 항상 최신 draft를 참조하도록 업데이트
  useEffect(() => {
    draftRef.current = draft;
  }, [draft]);

  const { mutate: putDraft, isPending: isPutDraftPending } = useMutation({
    mutationFn: (data: DraftRequest) => saveDraftApi(recruitmentId, data),
    onSuccess: () => {
      // TODO: 토스트 컴포넌트로 교체
      alert('임시저장이 완료되었습니다.');
      onSuccess?.();
    },
    onError: () => {
      // TODO: 토스트 컴포넌트로 교체
      onError?.();
    },
  });

  // 주기적 서버 동기화
  useEffect(() => {
    if (!enabled || recruitmentId === 0) {
      return;
    }

    const timer = setInterval(() => {
      putDraft(draftRef.current);
    }, SYNC_INTERVAL_MS);

    // 페이지 이탈 시 즉시 flush
    const handleBeforeUnload = () => {
      const url = `/api/v1/recruitment/${recruitmentId}/applications/draft`;
      const blob = new Blob([JSON.stringify(draftRef.current)], {
        type: 'application/json',
      });
      navigator.sendBeacon(url, blob);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      clearInterval(timer);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [enabled, recruitmentId, putDraft]);

  // 임시저장 버튼 클릭 시 수동 저장
  const handleClickSaveDraft = () => {
    putDraft(draft);
  };

  return { handleClickSaveDraft, isPutDraftPending };
};
