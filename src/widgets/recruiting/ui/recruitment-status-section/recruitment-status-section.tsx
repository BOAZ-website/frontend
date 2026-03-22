import * as styles from './recruitment-status-section.css';

interface RecruitmentStatusSectionProps {
  recruitDate: string;
}

const RecruitmentStatusSection = ({ recruitDate }: RecruitmentStatusSectionProps) => {
  return (
    <div className={styles.container}>
      <h1>{recruitDate}</h1>
      <p>D-day/CountDown</p>
    </div>
  );
};

export default RecruitmentStatusSection;
