import Section from '@/shared/components/section/section';

import * as styles from './timeline-section.css';

import RecruitmentTimeline from '@/entities/recruitment/ui/recruitment-timeline/recruitment-timeline';

const TimelineSection = () => {
  return (
    <div className={styles.container}>
      <Section title="모집 일정" subTitle="Timeline">
        <RecruitmentTimeline />
      </Section>
    </div>
  );
};

export default TimelineSection;
