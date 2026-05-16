import type { PersonalInfoForm } from './use-personal-info-form';

const DRAFT_KEY = 'boaz-apply-draft';

export interface ApplyDraft {
  step: number;
  personalInfo: PersonalInfoForm;
  answers: Record<string, string>;
}

export const loadDraft = (): ApplyDraft | null => {
  try {
    const raw = localStorage.getItem(DRAFT_KEY);
    return raw ? (JSON.parse(raw) as ApplyDraft) : null;
  } catch {
    return null;
  }
};

export const saveDraft = (draft: ApplyDraft): void => {
  try {
    localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
  } catch {
    // 예외 상황 무시
  }
};

export const clearDraft = (): void => {
  localStorage.removeItem(DRAFT_KEY);
};
