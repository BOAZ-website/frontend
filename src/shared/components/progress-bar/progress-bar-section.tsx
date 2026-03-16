import { useState } from 'react';

import ProgressBar from '@/shared/components/progress-bar/progress-bar';

import * as styles from './progress-bar-section.css';

const STEPS = ['지원자 정보', '공통 질문', '부문 질문'] as const;

const ProgressBarSection = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  return (
    <div className={styles.container}>
      {STEPS.map((label, index) => (
        <ProgressBar
          key={label}
          isCurrentStep={currentStep === index}
          onClick={() => setCurrentStep(index)}
        />
      ))}
    </div>
  );
};

export default ProgressBarSection;
