import NoticeForm from '@/features/notice/notice-form';
import { formatRecruitDate } from '@/shared/utils/date-formatter';

import CountdownTimer from '../count-down-timer/count-down-timer';
import DDayCounter from '../dday-counter/dday-counter';

import * as styles from './recruitment-status-section.css';

interface RecruitmentStatusSectionProps {
  startDate: string;
  endDate: string;
  isActive: boolean;
}

const RecruitmentStatusSection = ({
  startDate,
  endDate,
  isActive,
}: RecruitmentStatusSectionProps) => {
  const recruitDate = formatRecruitDate(startDate, endDate);

  return (
    <section className={styles.container}>
      <h2 className={styles.recruitDate}>{recruitDate}</h2>
      {isActive ? (
        <CountdownTimer deadline={endDate} />
      ) : (
        <>
          <DDayCounter startDate={startDate} />
          <NoticeForm />
        </>
      )}
    </section>
  );
};

export default RecruitmentStatusSection;
