import CurriculumBoxGroup from '@/widgets/curriculum/ui/curriculum-box-group/curriculum-box-group';
import type { CurriculumStepResponse } from '@/shared/api/types';

import * as styles from './curriculum-section.css';

interface CurriculumSectionProps {
  steps: CurriculumStepResponse[];
}

const BASE_SESSION_MAX_STEP = 7;

const CurriculumSection = ({ steps }: CurriculumSectionProps) => {
  const baseSteps = steps.filter((s) => (s.step ?? 0) <= BASE_SESSION_MAX_STEP);
  const semesterSteps = steps.filter((s) => (s.step ?? 0) > BASE_SESSION_MAX_STEP);

  return (
    <div className={styles.wrapper}>
      {/* 방학세션 */}
      <div className={styles.column}>
        <span className={styles.sessionLabel}>
          BASE
          <br />
          방학세션
        </span>
        <div className={styles.stepList}>
          {baseSteps.map((step) => (
            <CurriculumBoxGroup
              key={step.step}
              content={step.title ?? ''}
              week={step.step ?? 0}
              weekPosition="right"
            />
          ))}
        </div>
      </div>

      <div className={styles.divider} />

      {/* 학기세션 */}
      <div className={styles.column}>
        <span className={styles.sessionLabelRight}>
          BASE
          <br />
          학기세션
        </span>
        <div className={styles.stepList}>
          {semesterSteps.map((step) => (
            <CurriculumBoxGroup
              key={step.step}
              content={step.title ?? ''}
              week={step.step ?? 0}
              weekPosition="left"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurriculumSection;
