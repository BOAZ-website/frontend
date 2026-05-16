import ProgressBarSection from '@/shared/components/progress-bar/progress-bar-section';

import * as styles from './apply-title-section.css';

interface ApplyTitleSectionProps {
  currentStep: number;
  showProgressBar?: boolean;
  title: string;
}

const ApplyTitleSection = ({ currentStep, showProgressBar, title }: ApplyTitleSectionProps) => {
  return (
    <div className={styles.container}>
      {showProgressBar && <ProgressBarSection currentStep={currentStep} />}

      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

export default ApplyTitleSection;
