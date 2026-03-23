import * as styles from './section-header.css';

interface SectionHeaderProps {
  subTitle: string;
  title: string;
}

const SectionHeader = ({ subTitle, title }: SectionHeaderProps) => {
  return (
    <div className={styles.sectionHeader}>
      <span className={styles.subTitle}>{subTitle}</span>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
};

export default SectionHeader;
