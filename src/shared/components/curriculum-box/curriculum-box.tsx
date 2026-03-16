import { glassEffect } from '@/shared/styles/glass.css';
import * as styles from './curriculum-box.css';

interface CurriculumBoxProps {
  content: string;
}

const CurriculumBox = ({ content }: CurriculumBoxProps) => {
  return (
    <div className={`${styles.container} ${glassEffect}`}>
      <span className={styles.contentText}>{content}</span>
    </div>
  );

};

export default CurriculumBox;
