export const CATEGORIES = ['지원', '활동', '기타'] as const;
export type CategoryType = (typeof CATEGORIES)[number];

export const CATEGORY_TO_API = {
  지원: 'RECRUITMENT',
  활동: 'ACTIVITY',
  기타: 'ETC',
} as const satisfies Record<CategoryType, 'RECRUITMENT' | 'ACTIVITY' | 'ETC'>;

export type ApiCategory = (typeof CATEGORY_TO_API)[CategoryType];

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
  category: CategoryType;
  order_num: number;
}
