import Accordion from '@/shared/components/accordion/accordion';

import { CATEGORIES, type CategoryType, type FaqItem } from '../faq.types';

import * as styles from './faq-content-section.css';

interface FAQContentSectionProps {
  activeCategory: CategoryType;
  onCategoryChange: (cat: CategoryType) => void;
  currentList: FaqItem[];
}

export const FAQContentSection = ({
  activeCategory,
  onCategoryChange,
  currentList,
}: FAQContentSectionProps) => (
  <div className={styles.mainLayout}>
    <nav className={styles.sideNavigation}>
      {CATEGORIES.map((category) => (
        <button
          key={category}
          type="button"
          className={styles.tabVariants[activeCategory === category ? 'active' : 'default']}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </nav>

    <article className={styles.listSection}>
      <div className={styles.accordionContainer}>
        {currentList.map((item) => (
          <Accordion key={item.id} trigger={item.question}>
            {item.answer}
          </Accordion>
        ))}
      </div>
    </article>
  </div>
);
