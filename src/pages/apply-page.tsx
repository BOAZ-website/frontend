import { useState } from 'react';

import { ApplyTitleSection } from '@/widgets/apply/ui/apply-title-section';
import { CommonQuestionSection } from '@/widgets/apply/ui/common-question-section';
import { EngineeringQuestionSection } from '@/widgets/apply/ui/engineering-question-section';
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
        <section className={styles.content}>
          {currentStep === 1 && (
            <CommonQuestionSection
              onNext={function (): void {
                throw new Error('Function not implemented.');
              }}
              onPrev={function (): void {
                throw new Error('Function not implemented.');
              }}
            />
          )}
          {currentStep === 2 && (
            <EngineeringQuestionSection
              onPrev={function (): void {
                throw new Error('Function not implemented.');
              }}
              onNext={function (): void {
                throw new Error('Function not implemented.');
              }}
            />
          )}
        </section>
      </section>
    </main>
  );
};

export default ApplyPage;
