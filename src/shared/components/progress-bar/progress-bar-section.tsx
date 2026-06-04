import ProgressBar from '@/shared/components/progress-bar/progress-bar';

import * as styles from './progress-bar-section.css';

interface ProgressBarSectionProps {
  currentStep: number;
}

const STEPS = ['지원자 정보', '공통 질문', '부문 질문', '추가 정보'] as const;

const ProgressBarSection = ({ currentStep }: ProgressBarSectionProps) => {
  return (
    <div className={styles.container}>
      {STEPS.map((label, index) => (
        <ProgressBar key={label} isCurrentStep={currentStep === index} />
      ))}
    </div>
  );
};

export default ProgressBarSection;
