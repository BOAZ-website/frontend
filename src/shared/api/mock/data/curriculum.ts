// TODO: 백엔드 개발 서버로 확인할 수 있게 되면 삭제 예정 (임시 API 데이터)
// 공개 저장소이므로 실제 커리큘럼이 아니라 주차 수(1~7주 방학세션, 8~19주 학기세션)만 맞춘 예시 값을 둔다.
import type { CurriculumResponse, Track } from '@/shared/api/types';

const TOTAL_WEEKS = 19;

const toSteps = (trackName: string) =>
  Array.from({ length: TOTAL_WEEKS }, (_, index) => ({
    step: index + 1,
    title: `${trackName} ${index + 1}주차 주제 (예시)`,
    desc: '',
  }));

const curriculumOf = (id: number, track: Track, trackName: string): CurriculumResponse => ({
  id,
  track,
  curriculum_steps: toSteps(trackName),
});

export const MOCK_CURRICULUMS: CurriculumResponse[] = [
  curriculumOf(1, 'ANALYSIS', 'AI'),
  curriculumOf(2, 'VISUALIZATION', '시각화'),
  curriculumOf(3, 'ENGINEERING', '엔지니어링'),
];
