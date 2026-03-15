import * as styles from './curriculum-box.css';

interface CurriculumBoxProps {
  content: string;
}

const CurriculumBox = ({ content }: CurriculumBoxProps) => {
  return (
    <div className={styles.container}>
      <span className={styles.contentText}>{content}</span>
    </div>
  );
};

export default CurriculumBox;
