import * as styles from './timeline-step.css';

import type { RecruitmentStep } from '@/entities/recruitment/model/types';

interface TimelineStepProps {
  step: RecruitmentStep;
}

const TimelineStep = ({ step }: TimelineStepProps) => {
  return (
    <div className={styles.nodeWrapper}>
      <span className={styles.dateLabel}>{step.date}</span>
      <div className={styles.dotContainer}>
        <div className={styles.timelineDot} />
      </div>
      <div className={styles.stepLabel}>{step.stepLabel}</div>
    </div>
  );
};

export default TimelineStep;
