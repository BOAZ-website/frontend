// 출생연도: 1990년부터 2007년까지 (나이 19~36세 기준)
export const BIRTH_YEARS = Array.from({ length: 18 }, (_, i) => `${1990 + i}년`);

// 월: 1월부터 12월까지 생성
export const MONTHS = Array.from({ length: 12 }, (_, i) => `${i + 1}월`);

// 일: 1일부터 31일까지 생성
export const DAYS = Array.from({ length: 31 }, (_, i) => `${i + 1}일`);

// 학년 및 학기 구성
export const ACADEMIC_GRADES = ['1학년', '2학년', '3학년', '4학년', '5학년 이상'];
export const SEMESTERS = ['1학기', '2학기'];

// 졸업 예정 연도: 2024년부터 2030년까지
export const GRADUATION_YEARS = Array.from({ length: 7 }, (_, i) => `${2024 + i}년`);

// 기술 스택 경험 수준 (엔지니어링/시각화 섹션 공통)
export const EXPERIENCE_OPTIONS = [
  { label: '경험 없음', value: 'none' },
  { label: '학교 수업 수강 경험 있음', value: 'academic' },
  { label: '관련 프로젝트 경험 있음', value: 'project' },
  { label: '실무에서 사용 중임', value: 'professional' },
];
