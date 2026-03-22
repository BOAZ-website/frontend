import * as styles from './faqcategory.css';

const CATEGORIES = ['지원', '활동', '기타'] as const;
type CategoryType = typeof CATEGORIES[number];

interface FAQCategoryTabProps {
  activeCategory: CategoryType;
  onCategoryChange: (category: CategoryType) => void;
}

const FAQCategoryTab = ({ activeCategory, onCategoryChange }: FAQCategoryTabProps) => {
  return (
    <nav className={styles.container}>
      {CATEGORIES.map((category) => (
        <button
          type="button"
          key={category} 
          className={
            styles.itemVariants[activeCategory === category ? 'active' : 'default']
          }
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </nav>
  );
};

export default FAQCategoryTab;