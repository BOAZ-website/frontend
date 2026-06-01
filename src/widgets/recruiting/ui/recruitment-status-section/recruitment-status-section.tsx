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

  if (!status) {
    return null;
  }

  const { is_active } = status;
  const start_date = recruitment?.start_date;
  const end_date = recruitment?.end_date;

  return (
    <section className={styles.container}>
      {start_date && end_date && (
        <h2 className={styles.recruitDate}>{formatRecruitDate(start_date, end_date)}</h2>
      )}
      {is_active ? (
        end_date ? (
          <CountdownTimer deadline={end_date} />
        ) : null
      ) : (
        <>
          {start_date && <DDayCounter startDate={start_date} />} <NoticeForm />
        </>
      )}
    </section>
  );
};

export default RecruitmentStatusSection;
