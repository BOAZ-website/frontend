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
            week={step.step ?? 0}
            weekPosition="left"
          />
        ))}
      </div>

      <div className={styles.semesterStepList}>
        {semesterSteps.map((step) => (
          <CurriculumBoxGroup
            key={step.step}
            content={step.title ?? ''}
            week={step.step ?? 0}
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
