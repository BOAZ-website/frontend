import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { APPLY_QUERY_OPTIONS } from '@/widgets/apply/model/query-options';
import { usePersonalInfoForm } from '@/widgets/apply/model/use-personal-info-form';
import AnalysisQuestionSection from '@/widgets/apply/ui/analysis-question-section';
import ApplyTitleSection from '@/widgets/apply/ui/apply-title-section';
import CommonQuestionSection from '@/widgets/apply/ui/common-question-section';
import EngineeringQuestionSection from '@/widgets/apply/ui/engineering-question-section';
import PersonalInfoSection from '@/widgets/apply/ui/personal-info-section';
import VisualizationQuestionSection from '@/widgets/apply/ui/visualization-question-section';
import { useRecruitmentDeadline } from '@/shared/queries/use-recruitment-deadline';

import * as styles from './apply-page.css';

const STEPS = ['지원자 정보', '공통 질문', '부문 질문'] as const;
const LAST_STEP = STEPS.length - 1;

const ApplyPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const personalInfo = usePersonalInfoForm();
  const { track } = personalInfo.form;

  const { data: deadlineData } = useRecruitmentDeadline();
  const recruitmentId = deadlineData?.recruitment_id ?? 0;

  const { data: commonQuestions = [] } = useQuery({
    ...APPLY_QUERY_OPTIONS.QUESTIONS(recruitmentId, 'ALL'),
    enabled: recruitmentId > 0,
  });

  const { data: trackQuestions = [] } = useQuery({
    ...APPLY_QUERY_OPTIONS.QUESTIONS(recruitmentId, track ?? 'ANALYSIS'),
    enabled: recruitmentId > 0 && !!track,
  });

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => setCurrentStep((prev) => Math.min(prev + 1, LAST_STEP));
  const handlePrev = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  return (
    <main className={styles.container}>
      <ApplyTitleSection
        currentStep={currentStep}
        onStepClick={setCurrentStep}
        title={`${STEPS[currentStep]} 입력`}
      />

      <section className={styles.content}>
        {currentStep === 0 && (
          <PersonalInfoSection formContext={personalInfo} onNext={handleNext} />
        )}

        {currentStep === 1 && (
          <CommonQuestionSection
            questions={commonQuestions}
            answers={answers}
            onAnswerChange={handleAnswerChange}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        )}

        {currentStep === 2 && track === 'ANALYSIS' && (
          <AnalysisQuestionSection
            questions={trackQuestions}
            answers={answers}
            onAnswerChange={handleAnswerChange}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        )}
        {currentStep === 2 && track === 'ENGINEERING' && (
          <EngineeringQuestionSection
            questions={trackQuestions}
            answers={answers}
            onAnswerChange={handleAnswerChange}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        )}
        {currentStep === 2 && track === 'VISUALIZATION' && (
          <VisualizationQuestionSection
            questions={trackQuestions}
            answers={answers}
            onAnswerChange={handleAnswerChange}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        )}
      </section>
    </main>
  );
};

export default ApplyPage;
