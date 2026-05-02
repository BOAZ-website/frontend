import CurriculumBoxGroup from '@/widgets/curriculum/ui/curriculum-box-group/curriculum-box-group';
import type { CurriculumStepResponse } from '@/shared/api/types';

import * as styles from './curriculum-section.css';

interface CurriculumSectionProps {
  steps: CurriculumStepResponse[];
}

const BASE_SESSION_MAX_STEP = 7;

const CurriculumSection = ({ steps }: CurriculumSectionProps) => {
  const validSteps = steps.filter(
    (s): s is CurriculumStepResponse & { step: number } => s.step != null
  );
  const baseSteps = validSteps.filter((s) => s.step <= BASE_SESSION_MAX_STEP);
  const semesterSteps = validSteps.filter((s) => s.step > BASE_SESSION_MAX_STEP);

  return (
    <div className={styles.wrapper}>
      <div className={styles.baseLabel}>
        <span className={styles.sessionLabelText}>
          BASE
          <br />
          방학세션
        </span>
      </div>

      <div className={styles.divider} />

      <div className={styles.baseStepList}>
        {baseSteps.map((step) => (
          <CurriculumBoxGroup
            key={step.step}
            content={step.title ?? ''}
            week={step.step}
            weekPosition="left"
          />
        ))}
      </div>

      <div className={styles.semesterStepList}>
        {semesterSteps.map((step) => (
          <CurriculumBoxGroup
            key={step.step}
            content={step.title ?? ''}
            week={step.step}
            weekPosition="right"
          />
        ))}
      </div>

      <div className={styles.semesterLabel}>
        <span className={styles.sessionLabelText}>
          BASE
          <br />
          학기세션
        </span>
      </div>
    </div>
  );
};

export default CurriculumSection;
