import { useState } from 'react';

import { type CategoryType, FAQ_DATA } from '@/widgets/faq/faq.types';
import { FAQContentSection } from '@/pages/faq-content-section';
import { FAQTitleSection } from '@/pages/faq-title-section';

import * as styles from './faq-page.css';

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('지원');
  const currentList = FAQ_DATA[activeCategory];

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
