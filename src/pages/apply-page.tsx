import { useState } from 'react';

import { usePersonalInfoForm } from '@/widgets/apply/model/use-personal-info-form';
import { AnalysisQuestionSection } from '@/widgets/apply/ui/analysis-question-section';
import { ApplyTitleSection } from '@/widgets/apply/ui/apply-title-section';
import { CommonQuestionSection } from '@/widgets/apply/ui/common-question-section';
import { EngineeringQuestionSection } from '@/widgets/apply/ui/engineering-question-section';
import { PersonalInfoSection } from '@/widgets/apply/ui/personal-info-section';
import { VisualizationQuestionSection } from '@/widgets/apply/ui/visualization-question-section';
import type { Track } from '@/shared/api/types';
import { useRecruitmentDeadline } from '@/shared/queries/use-recruitment-deadline';

import * as styles from './apply-page.css';

const STEPS = ['지원자 정보', '공통 질문', '부문 질문'] as const;
const LAST_STEP = STEPS.length - 1;

const ApplyPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const personalInfo = usePersonalInfoForm();

  const { track } = personalInfo.form;

  const { data: deadlineData } = useRecruitmentDeadline();

  const handleNext = () => setCurrentStep((prev) => Math.min(prev + 1, LAST_STEP));
  const handlePrev = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const handlePersonalInfoNext = (selectedTrack: Track) => {
    handleNext();
  };

  return (
    <main className={styles.container}>
      <ApplyTitleSection
        currentStep={currentStep}
        onStepClick={setCurrentStep}
        title={`${STEPS[currentStep]} 입력`}
      />

      <section className={styles.content}>
        {currentStep === 0 && (
          <PersonalInfoSection formContext={personalInfo} onNext={handlePersonalInfoNext} />
        )}

        {currentStep === 1 && <CommonQuestionSection onPrev={handlePrev} onNext={handleNext} />}

        {currentStep === 2 && track === 'ANALYSIS' && (
          <AnalysisQuestionSection onPrev={handlePrev} onNext={handleNext} />
        )}
        {currentStep === 2 && track === 'ENGINEERING' && (
          <EngineeringQuestionSection onPrev={handlePrev} onNext={handleNext} />
        )}
        {currentStep === 2 && track === 'VISUALIZATION' && (
          <VisualizationQuestionSection onPrev={handlePrev} onNext={handleNext} />
        )}
      </section>
    </main>
  );
};

export default ApplyPage;
