import { useCallback, useEffect, useRef, useState } from 'react';
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
  const lastSavedRef = useRef<string | null>(null);
  const [isSaveSuccess, setIsSaveSuccess] = useState(false);
  const successTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  // 제출 중에는 자동 저장을 멈춤. 늦게 끝난 임시저장이 제출한 답변을 덮어쓰지 않게 함
  const pausedRef = useRef(false);
  const inflightRef = useRef<Promise<unknown> | null>(null);

  // 항상 최신 draft를 참조하도록 업데이트
  useEffect(() => {
    draftRef.current = draft;
  }, [draft]);

  useEffect(() => {
    return () => {
      if (successTimerRef.current) {
        clearTimeout(successTimerRef.current);
      }
    };
  }, []);

  const { mutateAsync: putDraft, isPending: isPutDraftPending } = useMutation({
    mutationFn: (data: DraftRequest) => saveDraftApi(recruitmentId, data),
    onSuccess: (_, data) => {
      lastSavedRef.current = JSON.stringify(data);
      setIsSaveSuccess(true);
      if (successTimerRef.current) {
        clearTimeout(successTimerRef.current);
      }
      successTimerRef.current = setTimeout(() => setIsSaveSuccess(false), 2000);
      onSuccess?.();
    },
    onError: () => {
      onError?.();
    },
  });

  const putDraftIfChanged = useCallback(
    (data: DraftRequest) => {
      if (pausedRef.current || lastSavedRef.current === JSON.stringify(data)) {
        return;
      }
      const request: Promise<unknown> = putDraft(data)
        .catch(() => undefined)
        .finally(() => {
          if (inflightRef.current === request) {
            inflightRef.current = null;
          }
        });
      inflightRef.current = request;
    },
    [putDraft]
  );

  // 주기적 서버 동기화
  useEffect(() => {
    if (!enabled || recruitmentId === 0) {
      return;
    }

    const timer = setInterval(() => {
      putDraftIfChanged(draftRef.current);
    }, SYNC_INTERVAL_MS);

    // 페이지 이탈 시 즉시 flush
    const handleBeforeUnload = () => {
      if (pausedRef.current) {
        return;
      }
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
  }, [enabled, recruitmentId, putDraftIfChanged]);

  // 임시저장 버튼 클릭 시 수동 저장
  const handleClickSaveDraft = () => {
    putDraftIfChanged(draft);
  };

  // 제출 직전에 호출: 자동 저장을 멈추고 진행 중인 임시저장이 끝날 때까지 기다림
  const pauseAndWaitForDraft = useCallback(async () => {
    pausedRef.current = true;
    await inflightRef.current;
  }, []);

  // 제출이 실패하면 자동 저장을 다시 켬
  const resumeDraft = useCallback(() => {
    pausedRef.current = false;
  }, []);

  return {
    handleClickSaveDraft,
    isPutDraftPending,
    isSaveSuccess,
    pauseAndWaitForDraft,
    resumeDraft,
  };
};
