import { useQuery } from '@tanstack/react-query';

import NoticeForm from '@/features/notice/notice-form';
import { formatRecruitDate } from '@/shared/utils/date-formatter';

import { RECRUITMENT_QUERY_OPTIONS } from '../../model/recruitment.query-options';
import CountdownTimer from '../count-down-timer/count-down-timer';
import DDayCounter from '../dday-counter/dday-counter';

import * as styles from './recruitment-status-section.css';

const RecruitmentStatusSection = () => {
  const { data: status } = useQuery(RECRUITMENT_QUERY_OPTIONS.STATUS());
  const { data: recruitment } = useQuery(RECRUITMENT_QUERY_OPTIONS.DETAIL(status?.term));

  if (!status || !recruitment) {
    return null;
  }

  const { is_active } = status;
  const { start_date, end_date } = recruitment;

  if (!start_date || !end_date) {
    return null;
  }

  return (
    <section className={styles.container}>
      <h2 className={styles.recruitDate}>{formatRecruitDate(start_date, end_date)}</h2>
      {is_active ? (
        <CountdownTimer deadline={end_date} />
      ) : (
        <>
          <DDayCounter startDate={start_date} />
          <NoticeForm />
        </>
      )}
    </section>
  );
};

export default RecruitmentStatusSection;
