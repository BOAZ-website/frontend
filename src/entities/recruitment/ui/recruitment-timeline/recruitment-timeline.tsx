import { MOCK_TIMELINE_STEPS } from '../../model/mock';
import TimelineStep from './timeline-step';

import * as styles from './recruitment-timeline.css';
const RecruitmentTimeline = () => {
  const steps = MOCK_TIMELINE_STEPS;

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
