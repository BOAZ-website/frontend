import ProgressBarSection from '@/shared/components/progress-bar/progress-bar-section';

import * as styles from './apply-title-section.css';

interface ApplyTitleSectionProps {
  currentStep: number;
  title: string;
}

const ApplyTitleSection = ({ currentStep, title }: ApplyTitleSectionProps) => {
  return (
    <div className={styles.container}>
      <ProgressBarSection currentStep={currentStep} />

      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

export default ApplyTitleSection;
