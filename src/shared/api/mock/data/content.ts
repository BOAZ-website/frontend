// TODO: 백엔드 개발 서버로 확인할 수 있게 되면 삭제 예정 (임시 API 데이터)
// 부문 표시 이름(27기 이하 "분석", 28기 이후 "AI")을 확인할 수 있게 27기·28기·기수 0 자료를 섞어 둔다. 이름은 가짜 값이다.
import type { ArchiveItemResponse, FaqResponse, ReviewResponse } from '@/shared/api/types';

export const MOCK_REVIEWS: ReviewResponse[] = [
  {
    id: 1,
    name: '김**',
    track: 'ANALYSIS',
    term: 27,
    content: '27기 분석 부문 후기 (예시)',
  },
  {
    id: 2,
    name: '이**',
    track: 'ANALYSIS',
    term: 28,
    content: '28기 AI 부문 후기 (예시)',
  },
  {
    id: 3,
    name: '박**',
    track: 'VISUALIZATION',
    term: 27,
    content: '27기 시각화 부문 후기 (예시)',
  },
  {
    id: 4,
    name: '최**',
    track: 'ENGINEERING',
    term: 28,
    content: '28기 엔지니어링 부문 후기 (예시)',
  },
];

export const MOCK_PROJECTS: ArchiveItemResponse[] = [
  {
    id: 1,
    term: 28,
    title: 'AI 부문 프로젝트 (예시)',
    team_name: '28기 AI 1팀',
    track: 'ANALYSIS',
    links: {},
  },
  {
    id: 2,
    term: 27,
    title: '분석 부문 프로젝트 (예시)',
    team_name: '27기 분석 2팀',
    track: 'ANALYSIS',
    links: {},
  },
  {
    id: 3,
    term: 0,
    title: '7기 이전 분석 프로젝트 (예시)',
    team_name: '분석팀',
    track: 'ANALYSIS',
    links: {},
  },
  {
    id: 4,
    term: 28,
    title: '시각화 부문 프로젝트 (예시)',
    team_name: '28기 시각화 1팀',
    track: 'VISUALIZATION',
    links: {},
  },
  {
    id: 5,
    term: 27,
    title: '엔지니어링 부문 프로젝트 (예시)',
    team_name: '27기 엔지니어링 1팀',
    track: 'ENGINEERING',
    links: {},
  },
];

export const MOCK_BLOGS: ArchiveItemResponse[] = [
  {
    id: 11,
    term: 28,
    title: 'AI 부문 블로그 (예시)',
    track: 'ANALYSIS',
    content_date: '2026-11-20',
    links: {},
  },
  {
    id: 12,
    term: 27,
    title: '분석 부문 블로그 (예시)',
    track: 'ANALYSIS',
    content_date: '2026-06-10',
    links: {},
  },
  {
    id: 13,
    term: 27,
    title: '시각화 부문 블로그 (예시)',
    track: 'VISUALIZATION',
    content_date: '2026-05-02',
    links: {},
  },
];

export const MOCK_ACTIVITIES: ArchiveItemResponse[] = [
  { id: 21, term: 28, title: '28기 활동사진 (예시)', track: 'ALL', links: {} },
  { id: 22, term: 27, title: '27기 활동사진 (예시)', track: 'ALL', links: {} },
];

export const MOCK_FAQS: FaqResponse[] = [
  {
    id: 1,
    category: 'RECRUITMENT',
    order_num: 1,
    question: '모집 FAQ 질문 (예시)',
    answer: '모집 FAQ 답변 (예시)',
  },
  {
    id: 2,
    category: 'ACTIVITY',
    order_num: 1,
    question: '활동 FAQ 질문 (예시)',
    answer: '활동 FAQ 답변 (예시)',
  },
  {
    id: 3,
    category: 'ETC',
    order_num: 1,
    question: '기타 FAQ 질문 (예시)',
    answer: '기타 FAQ 답변 (예시)',
  },
];
