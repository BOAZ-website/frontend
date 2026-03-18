import * as styles from './timeline-step.css';

// TODO: API 연동 시 삭제 예정
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
      <div className={styles.timelineDot} />
      <div className={styles.stepLabel}>{step.stepLabel}</div>
    </div>
  );
};

export default TimelineStep;
