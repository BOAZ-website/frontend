import SaveIcon from '@/shared/assets/icons/ic_save.svg?react';
import Button from '@/shared/components/button/button';
import ProgressBarSection from '@/shared/components/progress-bar/progress-bar-section';

import * as styles from './apply-title-section.css';

interface ApplyTitleSectionProps {
  currentStep: number;
  showProgressBar?: boolean;
  showSaveDraft?: boolean;
  title: string;
  subtitle?: string;
  onSaveDraft: () => void;
  isSavePending: boolean;
  isSaveSuccess: boolean;
}

const ApplyTitleSection = ({
  currentStep,
  showProgressBar,
  showSaveDraft = true,
  title,
  subtitle,
  onSaveDraft,
  isSavePending,
  isSaveSuccess,
}: ApplyTitleSectionProps) => {
  return (
    <div className={styles.container}>
      {showProgressBar && <ProgressBarSection currentStep={currentStep} />}

      <span className={styles.titleWrapper}>
        <div className={styles.titleGroup}>
          <h1 className={styles.title}>{title}</h1>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
        {showSaveDraft && (
          <Button
            preset="small-round_outlined"
            hasIcon
            onClick={onSaveDraft}
            disabled={isSavePending || isSaveSuccess}
          >
            <SaveIcon width={20} height={20} />
            {isSavePending ? '저장 중...' : isSaveSuccess ? '저장 완료 ✓' : '임시저장'}
          </Button>
        )}
      </span>
    </div>
  );
};

export default ApplyTitleSection;
