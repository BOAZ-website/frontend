import * as styles from './timeline-step.css';

export interface TimelineStep {
  id: string;
  date: string;
  stepLabel: string;
}

interface TimelineStepProps {
  step: TimelineStep;
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
