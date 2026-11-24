import { IS_MOCK_API } from '@/shared/api/client';

// 임시 API와 실제 API의 공고 ID가 같아도 같은 브라우저에서 초안이 섞이지 않게 임시 API일 때만 키를 나눈다.
const getDraftKey = (recruitmentId: number) =>
  `boaz-apply-draft-${IS_MOCK_API ? 'mock-' : ''}${recruitmentId}`;

export interface LocalDraft {
  personalInfo: Record<string, unknown>;
  answers: Record<string, string>;
}

export const loadLocalDraft = (recruitmentId: number): LocalDraft | null => {
  try {
    const raw = localStorage.getItem(getDraftKey(recruitmentId));
    return raw ? (JSON.parse(raw) as LocalDraft) : null;
  } catch {
    return null;
  }
};

export const saveLocalDraft = (recruitmentId: number, draft: LocalDraft): void => {
  try {
    localStorage.setItem(getDraftKey(recruitmentId), JSON.stringify(draft));
  } catch {
    // 논의 필요: 토스트 메세지?
  }
};

export const clearLocalDraft = (recruitmentId: number): void => {
  localStorage.removeItem(getDraftKey(recruitmentId));
};
