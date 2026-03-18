import TimelineStep from './timeline-step';

import * as styles from './recruitment-timeline.css';

const MOCK_TIMELINE_STEPS = [
  { id: '1', date: '12.08 ~ 12.22', stepLabel: '서류 모집' },
  { id: '2', date: '12.23 ~ 12.30', stepLabel: '서류 발표' },
  { id: '3', date: '12.31 ~ 01.07', stepLabel: '면접' },
  { id: '4', date: '01.05', stepLabel: '최종 발표' },
  { id: '5', date: '01.10', stepLabel: 'OT' },
];

const RecruitmentTimeline = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.track}>
        {MOCK_TIMELINE_STEPS.map((step) => (
          <TimelineStep key={step.id} step={step} />
        ))}
      </div>
    </div>
  );
};

export default RecruitmentTimeline;
