import { useQuery } from '@tanstack/react-query';

import Section from '@/shared/components/section/section';

import { RECRUITMENT_QUERY_OPTIONS } from '../../model/recruitment.query-options';

import * as styles from './timeline-section.css';

import type { ScheduleStep } from '@/entities/recruitment/model/types';
import { toRecruitmentSteps } from '@/entities/recruitment/model/types';
import RecruitmentTimeline from '@/entities/recruitment/ui/recruitment-timeline/recruitment-timeline';

const TimelineSection = () => {
  const { data: status } = useQuery(RECRUITMENT_QUERY_OPTIONS.STATUS());
  const { data: recruitment } = useQuery(RECRUITMENT_QUERY_OPTIONS.DETAIL(status?.term));

  const steps = toRecruitmentSteps((recruitment?.schedule as ScheduleStep[]) ?? []);

  if (steps.length === 0) {
    return null;
  }

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <Section title="모집 일정" subTitle="Timeline">
          <RecruitmentTimeline steps={steps} />
        </Section>
      </div>
    </section>
  );
};

export default TimelineSection;
