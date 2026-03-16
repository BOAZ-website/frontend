import CurriculumBox from '@/shared/components/curriculum-box/curriculum-box';

import * as styles from './curriculum-box-group.css';

interface CurriculumBoxGroupProps {
  content: string;
  week: number;
  weekPosition?: 'left' | 'right';
}

const CurriculumBoxGroup = ({ content, week, weekPosition = 'left' }: CurriculumBoxGroupProps) => {
  const weekLabel = <span className={styles.weekLabel}>{week}주차</span>;

  return (
    <div className={styles.container}>
      {weekPosition === 'left' && weekLabel}
      <CurriculumBox content={content} />
      {weekPosition === 'right' && weekLabel}
    </div>
  );
};

export default CurriculumBoxGroup;
