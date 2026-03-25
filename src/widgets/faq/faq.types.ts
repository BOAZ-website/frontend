export const CATEGORIES = ['지원', '활동', '기타'] as const;
export type CategoryType = (typeof CATEGORIES)[number];

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
  category: CategoryType;
  order_num: number;
}

export const FAQ_DATA: Record<CategoryType, FaqItem[]> = {
  지원: [
    {
      id: 1,
      question: '경쟁률은 어느 정도 인가요?',
      answer: '기수/부문마다 상이합니다.',
      category: '지원',
      order_num: 1,
    },
    {
      id: 2,
      question: '비전공자도 지원 가능한가요?',
      answer: '열정만 있다면 가능합니다.',
      category: '지원',
      order_num: 2,
    },
    {
      id: 3,
      question: '비전공자도 지원 가능한가요?',
      answer: '열정만 있다면 가능합니다.',
      category: '지원',
      order_num: 3,
    },
    {
      id: 4,
      question: '비전공자도 지원 가능한가요?',
      answer: '열정만 있다면 가능합니다.',
      category: '지원',
      order_num: 4,
    },
  ],
  활동: [
    {
      id: 5,
      question: '활동 기간이 어떻게 되나요?',
      answer: '정규 1년입니다.',
      category: '활동',
      order_num: 1,
    },
    {
      id: 6,
      question: '활동 기간이 어떻게 되나요?',
      answer: '정규 1년입니다.',
      category: '활동',
      order_num: 2,
    },
  ],
  기타: [
    {
      id: 7,
      question: '회비가 있나요?',
      answer: '소정의 회비가 발생합니다.',
      category: '기타',
      order_num: 1,
    },
    {
      id: 8,
      question: '회비가 있나요?',
      answer: '소정의 회비가 발생합니다.',
      category: '기타',
      order_num: 2,
    },
    {
      id: 9,
      question: '회비가 있나요?',
      answer: '소정의 회비가 발생합니다.',
      category: '기타',
      order_num: 3,
    },
    {
      id: 10,
      question: '회비가 있나요?',
      answer: '소정의 회비가 발생합니다.',
      category: '기타',
      order_num: 4,
    },
  ],
};
