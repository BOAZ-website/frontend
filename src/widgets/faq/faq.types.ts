export const CATEGORIES = ['지원', '활동', '기타'] as const;
export type CategoryType = (typeof CATEGORIES)[number];

export interface FaqItem {
  id: number;
  q: string;
  a: string;
}

export const FAQ_DATA: Record<CategoryType, FaqItem[]> = {
  지원: [
    { id: 1, q: '경쟁률은 어느 정도 인가요?', a: '기수/부문마다 상이합니다.' },
    { id: 2, q: '비전공자도 지원 가능한가요?', a: '열정만 있다면 가능합니다.' },
    { id: 3, q: '비전공자도 지원 가능한가요?', a: '열정만 있다면 가능합니다.' },
    { id: 4, q: '비전공자도 지원 가능한가요?', a: '열정만 있다면 가능합니다.' },
  ],
  활동: [
    { id: 5, q: '활동 기간이 어떻게 되나요?', a: '정규 1년입니다.' },
    { id: 6, q: '활동 기간이 어떻게 되나요?', a: '정규 1년입니다.' },
  ],
  기타: [
    { id: 7, q: '회비가 있나요?', a: '소정의 회비가 발생합니다.' },
    { id: 8, q: '회비가 있나요?', a: '소정의 회비가 발생합니다.' },
    { id: 9, q: '회비가 있나요?', a: '소정의 회비가 발생합니다.' },
    { id: 10, q: '회비가 있나요?', a: '소정의 회비가 발생합니다.' },
  ],
};
