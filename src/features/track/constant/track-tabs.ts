export const TRACK_TABS = ['분석', '시각화', '엔지니어링'] as const;
export type TrackTab = (typeof TRACK_TABS)[number];
