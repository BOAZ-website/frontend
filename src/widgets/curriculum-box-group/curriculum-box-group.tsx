import CurriculumBox from '@/shared/components/curriculum-box/curriculum-box';

import * as styles from './curriculum-box-group.css';

interface CurriculumBoxGroupProps {
  content: string;
  week: number;
}

const curriculumBoxGroup = ({ content, week }: CurriculumBoxGroupProps) => {
  return (
    <div className={styles.container}>
      <span className={styles.weekLabel}>{week}주차</span>
      <CurriculumBox content={content} />
    </div>
  );
};

export default curriculumBoxGroup;
