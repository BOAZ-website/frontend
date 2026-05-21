import { useEffect, useRef } from 'react';

import { saveLocalDraft } from './apply-draft';
import type { PersonalInfoForm } from './use-personal-info-form';

const DEBOUNCE_MS = 500;

interface UseSaveDraftParams {
  recruitmentId: number;
  personalInfo: PersonalInfoForm;
  answers: Record<string, string>;
  enabled: boolean;
}

export const useSaveDraft = ({
  recruitmentId,
  personalInfo,
  answers,
  enabled,
}: UseSaveDraftParams) => {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastSavedRef = useRef<string>('');

  useEffect(() => {
    if (!enabled || recruitmentId === 0) {
      return;
    }

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      const draft = { personalInfo: personalInfo as unknown as Record<string, unknown>, answers };
      const serialized = JSON.stringify(draft);

      // 이전에 저장한 값과 동일하면 스킵
      if (serialized === lastSavedRef.current) {
        return;
      }

      saveLocalDraft(recruitmentId, draft);
      lastSavedRef.current = serialized;
    }, DEBOUNCE_MS);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [recruitmentId, personalInfo, answers, enabled]);
};
