import ProgressBarSection from '@/shared/components/progress-bar/progress-bar-section';

import * as styles from './apply-title-section.css';

interface ApplyTitleSectionProps {
  currentStep: number;
  onStepClick: (index: number) => void;
  title: string;
}

const ApplyTitleSection = ({ currentStep, onStepClick, title }: ApplyTitleSectionProps) => {
  return (
    <div className={styles.container}>
      <ProgressBarSection currentStep={currentStep} onStepClick={onStepClick} />

      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

export default ApplyTitleSection;
