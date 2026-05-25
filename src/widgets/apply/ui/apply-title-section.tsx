import SaveIcon from '@/shared/assets/icons/ic_save.svg?react';
import Button from '@/shared/components/button/button';
import ProgressBarSection from '@/shared/components/progress-bar/progress-bar-section';

import * as styles from './apply-title-section.css';

interface ApplyTitleSectionProps {
  currentStep: number;
  showProgressBar?: boolean;
  title: string;
  onSaveDraft: () => void;
  isSavePending: boolean;
}

const ApplyTitleSection = ({
  currentStep,
  showProgressBar,
  title,
  onSaveDraft,
  isSavePending,
}: ApplyTitleSectionProps) => {
  return (
    <div className={styles.container}>
      {showProgressBar && <ProgressBarSection currentStep={currentStep} />}

      <span className={styles.titleWrapper}>
        <h1 className={styles.title}>{title}</h1>
        <Button
          preset="small-round_outlined"
          hasIcon
          onClick={onSaveDraft}
          disabled={isSavePending}
        >
          <SaveIcon width={20} height={20} />
          {isSavePending ? '저장 중...' : '임시저장'}
        </Button>
      </span>
    </div>
  );
};

export default ApplyTitleSection;
