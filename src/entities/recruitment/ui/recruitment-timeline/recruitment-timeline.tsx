import type { RecruitmentStep } from '../../model/types';
import TimelineStep from './timeline-step';

import * as styles from './recruitment-timeline.css';
interface RecruitmentTimelineProps {
  steps: RecruitmentStep[];
}

const RecruitmentTimeline = ({ steps }: RecruitmentTimelineProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.track}>
        {steps.map((step) => (
          <TimelineStep key={step.id} step={step} />
        ))}
      </div>
    </div>
  );
};

export default RecruitmentTimeline;
