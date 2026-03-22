import { useState } from 'react';
import * as styles from './faq-page.css';

import PageHeader from 'src/widgets/tab-bar/ui/tab-bar';
import Button from '@/shared/components/button/button';
import Accordion from '@/shared/components/accordion/accordion';

import ChatIcon from '@/shared/assets/icon/ic_chat.svg?react';
import FAQCategoryTab from '@/shared/faq/faqcategory';

const CATEGORIES = ['지원', '활동', '기타'] as const;
type CategoryType = typeof CATEGORIES[number];

interface FaqItem {
  id: number;
  q: string;
  a: string;
}

// 질문 데이터(삭제예정)
const FAQ_DATA: Record<CategoryType, FaqItem[]> ={
  지원: [
    { id: 1, q: '경쟁률은 어느 정도 인가요?', a: '경쟁률은 기수/부문마다 상이하기 때문에 확실하게 말씀드리기 어렵습니다...' },
    { id: 2, q: '비전공자도 지원 가능한가요?', a: '네, 열정만 있다면 전공은 무관합니다.' },
  ],
  활동: [
    { id: 3, q: '활동 기간이 어떻게 되나요?', a: '정규 활동 기간은 1년입니다.' },
  ],
  기타: [
    { id: 4, q: '회비가 있나요?', a: '네, 운영을 위한 소정의 회비가 발생합니다.' },
  ],
};

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('지원');

  const currentList = FAQ_DATA[activeCategory];

  return (
    <main className={styles.container}>
      {/* 전역 상단 바 */}
      <PageHeader />

      <section className={styles.contentWrapper}>
        {/* 1. 타이틀 영역 */}
        <h1 className={styles.pageTitle}>FAQ</h1>

        <div className={styles.mainLayout}>
          {/* 2. 좌측 카테고리 탭 위젯 */}
          <nav className={styles.sideNavigation}>
            <FAQCategoryTab 
              activeCategory={activeCategory} 
              onCategoryChange={(cat) => setActiveCategory(cat)}
            />
          </nav>

          <article className={styles.listSection}>
            <div className={styles.chatButtonWrapper}>
            <Button 
              preset="small-round_primary"
              onClick={() => window.open('카톡채널링크')}
              >
            <div className={styles.chatContent}>
            <ChatIcon className={styles.chatIcon} />
              카카오톡 문의하기
            </div>
              </Button>
            </div>

            <div className={styles.accordionContainer}>
            {currentList.map((item) => (
            <Accordion key={item.id} trigger={item.q}>
              {item.a}
            </Accordion>
              ))}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default FAQPage;