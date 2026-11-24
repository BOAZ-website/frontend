import type { Track } from '@/shared/api/types';

/** 분석(`ANALYSIS`) 부문을 "AI"로 표시하기 시작한 기수. 2026-11-23 결정. API·DB 값은 `ANALYSIS` 그대로다. */
export const AI_TRACK_START_TERM = 28;

/** 여러 기수의 자료를 함께 거르는 필터(아카이브 등)에서 분석 부문의 이름. */
export const ANALYSIS_ALL_TERMS_LABEL = 'AI(분석)';

const TRACK_LABEL: Record<Track, string> = {
  ANALYSIS: '분석',
  VISUALIZATION: '시각화',
  ENGINEERING: '엔지니어링',
};

const TRACK_FULL_LABEL: Record<Track, string> = {
  ANALYSIS: '데이터 분석',
  VISUALIZATION: '데이터 시각화',
  ENGINEERING: '데이터 엔지니어링',
};

const AI_TRACK_LABEL = 'AI';

/** 기수를 모르거나 0(7기 이전)이면 기존 자료로 보고 "분석"을 쓴다. */
const isAiTerm = (term: number | null | undefined): boolean =>
  term != null && term >= AI_TRACK_START_TERM;

/** 부문 코드를 그 기수의 짧은 이름으로 바꾼다. 예: 27기 ANALYSIS → 분석, 28기 → AI */
export const getTrackLabel = (track: Track, term: number | null | undefined): string =>
  track === 'ANALYSIS' && isAiTerm(term) ? AI_TRACK_LABEL : TRACK_LABEL[track];

/** 지원서처럼 "데이터 ○○" 형태로 쓰는 이름. 28기 이후 분석은 "AI"다. */
export const getTrackFullLabel = (track: Track, term: number | null | undefined): string =>
  track === 'ANALYSIS' && isAiTerm(term) ? AI_TRACK_LABEL : TRACK_FULL_LABEL[track];

/** 홈·모집 소개·현재 커리큘럼처럼 지금 공개 중인 부문 이름. 비시즌에도 "AI"다. */
export const getCurrentTrackLabel = (track: Track): string =>
  getTrackLabel(track, AI_TRACK_START_TERM);
