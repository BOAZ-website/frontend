import { useState } from 'react';

import { ApplyTitleSection } from '@/widgets/apply/ui/apply-title-section';
import { PersonalInfoSection } from '@/widgets/apply/ui/personal-info-section';

import * as styles from './apply-page.css'; // 페이지 전체 레이아웃 스타일

const STEPS = ['지원자 정보', '공통 질문', '부문 질문'] as const;

const ApplyPage = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleStepClick = (index: number) => {
    setCurrentStep(index);
  };

  return (
    <main className={styles.container}>
      <ApplyTitleSection
        currentStep={currentStep}
        onStepClick={handleStepClick}
        title={`${STEPS[currentStep]} 입력`}
      />

      <section className={styles.content}>
        {currentStep === 0 && (
          <PersonalInfoSection
            onNext={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
        )}
        {currentStep === 1 && <div>공통 질문 위젯 준비 중...</div>}
        {currentStep === 2 && <div>부문 질문 위젯 준비 중...</div>}
      </section>
    </main>
  );
};

export default ApplyPage;
