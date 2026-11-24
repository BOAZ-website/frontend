/** 탭 상태와 API 조회에 쓰는 부문 코드. 화면 이름은 `getCurrentTrackLabel`로 붙인다. */
export const TRACK_TABS = ['ANALYSIS', 'VISUALIZATION', 'ENGINEERING'] as const;
export type TrackTab = (typeof TRACK_TABS)[number];
