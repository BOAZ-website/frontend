import { useState } from 'react';
import * as styles from './faq-page.css';
import { FAQTitleSection } from '@/widgets/faq/faq-title-section';
import { FAQContentSection } from '@/widgets/faq/faq-content-section';
import { type CategoryType, FAQ_DATA } from '@/widgets/faq/faq.types'; 

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