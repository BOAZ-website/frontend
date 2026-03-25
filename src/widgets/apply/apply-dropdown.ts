// 연도: 2020년부터 2030년까지 생성
export const BIRTH_YEARS = Array.from({ length: 11 }, (_, i) => `${2020 + i}년`);

// 월: 1월부터 12월까지 생성
export const MONTHS = Array.from({ length: 12 }, (_, i) => `${i + 1}월`);

// 일: 1일부터 31일까지 생성
export const DAYS = Array.from({ length: 31 }, (_, i) => `${i + 1}일`);

// 학년 및 학기 구성
export const ACADEMIC_GRADES = ['1학년', '2학년', '3학년', '4학년', '5학년 이상'];
export const SEMESTERS = ['1학기', '2학기'];

// 졸업 예정 연도 (현재 기준으로 미래 연도 중심)
export const GRADUATION_YEARS = Array.from({ length: 10 }, (_, i) => `${2024 + i}년`);
