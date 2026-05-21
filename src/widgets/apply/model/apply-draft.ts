const getDraftKey = (recruitmentId: number) => `boaz-apply-draft-${recruitmentId}`;

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
