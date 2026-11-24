// TODO: 백엔드 개발 서버로 확인할 수 있게 되면 삭제 예정 (임시 API 데이터)
// 공개 저장소이므로 실제 모집 일정·문항이 아니라 화면 확인용 예시 값만 둔다.
// 문항 수·필수 여부·글자 수 제한·표 문항처럼 화면 동작에 필요한 모양만 실제 지원서와 맞춘다.
import type { QuestionResponse, RecruitmentResponse } from '@/shared/api/types';

/** 예시 모집 공고. 기수 28은 부문 표시 이름(AI)을 확인하려고 둔 값이고, 날짜는 실제 일정이 아니다. */
export const MOCK_RECRUITMENT: RecruitmentResponse = {
  recruitment_id: 3,
  term: 28,
  start_date: '2026-01-01T00:00:00',
  end_date: '2026-12-31T23:59:59',
  schedule: [
    { step: '서류 모집', start: '2026-01-01', end: '2026-01-14', sequence: 1 },
    { step: '서류 합격 발표', start: '2026-01-20', end: '2026-01-20', sequence: 2 },
    { step: '면접', start: '2026-01-24', end: '2026-01-25', sequence: 3 },
    { step: '최종 합격 발표', start: '2026-01-31', end: '2026-01-31', sequence: 4 },
  ],
  brochure_url: 'https://example.com/brochure.pdf',
  is_active: true,
};

const COMMON_QUESTIONS: QuestionResponse[] = [
  {
    question_id: 2801,
    label: 'COMMON1',
    category: 'COMMON',
    type: 'TEXT',
    content: '{부문} 부문 지원 동기 문항 (예시) (공백 포함 500자 이내)',
    limit_length: 500,
    order_num: 1,
    is_required: true,
  },
  {
    question_id: 2802,
    label: 'COMMON2',
    category: 'COMMON',
    type: 'TEXT',
    content: '공통 문항 2 (예시) (공백 포함 500자 이내)',
    limit_length: 500,
    order_num: 2,
    is_required: true,
  },
  {
    question_id: 2803,
    label: 'COMMON3',
    category: 'COMMON',
    type: 'TEXT',
    content: '공통 문항 3 (예시) (공백 포함 500자 이내)',
    limit_length: 500,
    order_num: 3,
    is_required: true,
  },
  {
    question_id: 2804,
    label: 'COMMON4',
    category: 'COMMON',
    type: 'TEXT',
    content: '공통 문항 4 (예시) (공백 포함 200자 이내)',
    limit_length: 200,
    order_num: 4,
    is_required: true,
  },
  {
    question_id: 2805,
    label: 'INTERVIEW',
    category: 'COMMON',
    type: 'TABLE',
    content: '면접 가능 시간 (복수 선택)',
    description: '면접 가능 시간 안내 (예시)\n가능한 시간을 모두 선택하는 표 문항 (예시)',
    metadata: {
      rows: ['날짜 1 (예시)', '날짜 2 (예시)'],
      columns: ['시간 1 (예시)', '시간 2 (예시)', '시간 3 (예시)'],
      multiple: true,
    },
    order_num: 5,
    is_required: true,
  },
  {
    // order_num 99 이상인 선택 공통 질문은 지원서 마지막 단계에 따로 나온다(apply-page.tsx).
    question_id: 2806,
    label: 'COMMON5',
    category: 'COMMON',
    type: 'TEXT',
    content: '선택 공통 문항 (예시) (공백 포함 500자 이내)',
    limit_length: 500,
    order_num: 99,
    is_required: false,
  },
];

const ANALYSIS_QUESTIONS: QuestionResponse[] = [
  {
    question_id: 2811,
    label: 'ANALYSIS1',
    category: 'ANALYSIS',
    type: 'TEXT',
    content: 'AI 부문 문항 1 (예시) (공백 포함 700자 이내)',
    limit_length: 700,
    order_num: 10,
    is_required: true,
  },
  {
    question_id: 2812,
    label: 'ANALYSIS2',
    category: 'ANALYSIS',
    type: 'TEXT',
    content: 'AI 부문 문항 2 (예시) (공백 포함 700자 이내)',
    limit_length: 700,
    order_num: 11,
    is_required: true,
  },
  {
    question_id: 2813,
    label: 'ANALYSIS3',
    category: 'ANALYSIS',
    type: 'TEXT',
    content: 'AI 부문 문항 3 (예시) (공백 포함 400자 이내)',
    limit_length: 400,
    order_num: 12,
    is_required: true,
  },
  {
    question_id: 2814,
    label: 'ANALYSIS4',
    category: 'ANALYSIS',
    type: 'TEXT',
    content: 'AI 부문 문항 4 (예시) (공백 포함 300자 이내)',
    limit_length: 300,
    order_num: 13,
    is_required: false,
  },
];

const VISUALIZATION_QUESTIONS: QuestionResponse[] = [
  {
    question_id: 2821,
    label: 'VISUALIZATION1',
    category: 'VISUALIZATION',
    type: 'TEXT',
    content: '시각화 부문 문항 1 (예시) (공백 포함 300자 이내)',
    description: '문항 설명 첫째 줄 (예시)\n문항 설명 둘째 줄 (예시)',
    limit_length: 300,
    order_num: 10,
    is_required: true,
  },
  {
    question_id: 2822,
    label: 'VISUALIZATION2',
    category: 'VISUALIZATION',
    type: 'TEXT',
    content: '시각화 부문 문항 2 (예시) (공백 포함 600자 이내)',
    limit_length: 600,
    order_num: 11,
    is_required: false,
  },
  {
    question_id: 2823,
    label: 'VISUALIZATION3',
    category: 'VISUALIZATION',
    type: 'TEXT',
    content: '시각화 부문 문항 3 (예시) (공백 포함 700자 이내)',
    limit_length: 700,
    order_num: 12,
    is_required: true,
  },
  {
    question_id: 2824,
    label: 'VISUALIZATION4',
    category: 'VISUALIZATION',
    type: 'TEXT',
    content: '시각화 부문 문항 4 (예시) (공백 포함 500자 이내)',
    limit_length: 500,
    order_num: 13,
    is_required: true,
  },
];

const ENGINEERING_QUESTIONS: QuestionResponse[] = [
  {
    question_id: 2831,
    label: 'ENGINEERING1',
    category: 'ENGINEERING',
    type: 'TABLE',
    content: '엔지니어링 부문 표 문항 (예시)',
    metadata: {
      rows: ['항목 1 (예시)', '항목 2 (예시)', '항목 3 (예시)'],
      columns: ['선택지 1 (예시)', '선택지 2 (예시)', '선택지 3 (예시)'],
    },
    order_num: 10,
    is_required: false,
  },
  {
    question_id: 2832,
    label: 'ENGINEERING2',
    category: 'ENGINEERING',
    type: 'TEXT',
    content: '엔지니어링 부문 문항 2 (예시) (공백 포함 600자 이내)',
    limit_length: 600,
    order_num: 11,
    is_required: true,
  },
  {
    question_id: 2833,
    label: 'ENGINEERING3',
    category: 'ENGINEERING',
    type: 'TEXT',
    content: '엔지니어링 부문 문항 3 (예시) (공백 포함 700자 이내)',
    limit_length: 700,
    order_num: 12,
    is_required: true,
  },
  {
    question_id: 2834,
    label: 'ENGINEERING4',
    category: 'ENGINEERING',
    type: 'TEXT',
    content: '엔지니어링 부문 문항 4 (예시) (공백 포함 400자 이내)',
    limit_length: 400,
    order_num: 13,
    is_required: false,
  },
];

/** 예시 지원서 문항. 공통 문항과 부문 문항을 order_num 순으로 함께 돌려준다. */
export const MOCK_QUESTIONS: QuestionResponse[] = [
  ...COMMON_QUESTIONS,
  ...ANALYSIS_QUESTIONS,
  ...VISUALIZATION_QUESTIONS,
  ...ENGINEERING_QUESTIONS,
];
