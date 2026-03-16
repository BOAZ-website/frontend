import ProgressBar from '@/shared/components/progress-bar/progress-bar';

import * as styles from './progress-bar-section.css';

interface ProgressBarSectionProps {
  currentStep: number;
  onStepClick: (index: number) => void;
}

const STEPS = ['지원자 정보', '공통 질문', '부문 질문'] as const;

const ProgressBarSection = ({ currentStep, onStepClick }: ProgressBarSectionProps) => {
  return (
    <div className={styles.container}>
      {STEPS.map((label, index) => (
        <ProgressBar
          key={label}
          isCurrentStep={currentStep === index}
          onClick={() => onStepClick(index)}
        />
      ))}
    </div>
  );
};

export default ProgressBarSection;
