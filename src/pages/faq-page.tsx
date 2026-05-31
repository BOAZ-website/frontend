import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { CATEGORY_TO_API, type CategoryType } from '@/widgets/faq/faq.types';
import { FAQ_QUERY_OPTIONS } from '@/widgets/faq/model/query-option';
import FAQContentSection from '@/widgets/faq/ui/faq-content-section';
import FAQTitleSection from '@/widgets/faq/ui/faq-title-section';
import ChatIcon from '@/shared/assets/icons/ic_kakao_button_logo.svg?react';
import Button from '@/shared/components/button/button';

import * as styles from './faq-page.css';

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('지원');

  const apiCategory = CATEGORY_TO_API[activeCategory];

  const { data: faqList = [] } = useQuery(FAQ_QUERY_OPTIONS.LIST(apiCategory));

  const currentList = faqList.map((item) => ({
    id: item.id ?? 0,
    question: item.question ?? '',
    answer: item.answer ?? '',
    category: activeCategory,
    order_num: item.order_num ?? 0,
  }));

  return (
    <main className={styles.container}>
      <section className={styles.contentWrapper}>
        <FAQTitleSection />
        <FAQContentSection
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          currentList={currentList}
        />
        <div className={styles.mobileButtonWrapper}>
          <Button
            preset="small-round_primary"
            onClick={() => window.open('https://pf.kakao.com/_xeaCBK')}
          >
            <div className={styles.chatContent}>
              <ChatIcon width={16} height={16} />
              카카오톡 문의하기
            </div>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default FAQPage;
