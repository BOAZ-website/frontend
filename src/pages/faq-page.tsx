import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { CATEGORY_TO_API, type CategoryType } from '@/widgets/faq/faq.types';
import { FAQ_QUERY_OPTIONS } from '@/widgets/faq/model/query-option';
import FAQContentSection from '@/widgets/faq/ui/faq-content-section';
import FAQTitleSection from '@/widgets/faq/ui/faq-title-section';

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
      </section>
    </main>
  );
};

export default FAQPage;
