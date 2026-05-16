import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { clearDraft, loadDraft, saveDraft } from '@/widgets/apply/model/apply-draft';
import { APPLY_QUERY_OPTIONS } from '@/widgets/apply/model/query-options';
import { usePersonalInfoForm } from '@/widgets/apply/model/use-personal-info-form';
import { useSubmitApplication } from '@/widgets/apply/model/use-submit-application';
import AnalysisQuestionSection from '@/widgets/apply/ui/analysis-question-section';
import ApplyTitleSection from '@/widgets/apply/ui/apply-title-section';
import CommonQuestionSection from '@/widgets/apply/ui/common-question-section';
import EngineeringQuestionSection from '@/widgets/apply/ui/engineering-question-section';
import PersonalInfoSection from '@/widgets/apply/ui/personal-info-section';
import VisualizationQuestionSection from '@/widgets/apply/ui/visualization-question-section';
import type { AnswerRequest, ApplicationRequest, Track } from '@/shared/api/types';
import { useRecruitmentDeadline } from '@/shared/queries/use-recruitment-deadline';

import * as styles from './apply-page.css';

const STEPS = ['지원자 정보', '공통 질문', '부문 질문'] as const;
const LAST_STEP = STEPS.length - 1;

const ApplyPage = () => {
  const [draft] = useState(loadDraft);
  const [currentStep, setCurrentStep] = useState(draft?.step ?? 0);
  const [answers, setAnswers] = useState<Record<string, string>>(draft?.answers ?? {});

  const { data: deadline } = useRecruitmentDeadline();
  const recruitmentId = deadline?.recruitment_id ?? 0;

  const personalInfo = usePersonalInfoForm(draft?.personalInfo);

  useEffect(() => {
    saveDraft({ step: currentStep, personalInfo: personalInfo.form, answers });
  }, [currentStep, personalInfo.form, answers]);

  const { form } = personalInfo;
  const track = form.track;

  const submitMutation = useSubmitApplication();

  const { data: allQuestions = [] } = useQuery({
    ...APPLY_QUERY_OPTIONS.QUESTIONS(recruitmentId, track ?? 'ANALYSIS'),
    enabled: recruitmentId > 0 && !!track,
  });

  const commonQuestions = allQuestions.filter((q) => q.category === 'COMMON');
  const trackQuestions = allQuestions.filter((q) => q.category !== 'COMMON');

  const handleNext = () => setCurrentStep((prev) => Math.min(prev + 1, LAST_STEP));
  const handlePrev = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const setAnswer = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const buildAnswers = (): AnswerRequest[] => {
    const result: AnswerRequest[] = [];
    for (const [key, value] of Object.entries(answers)) {
      const isExtra = key.includes('__extra_');
      const baseId = isExtra ? key.split('__extra_')[0] : key;
      const question = allQuestions.find((q) => String(q.question_id) === baseId);
      let answer: unknown = value;
      if (question?.type === 'TABLE') {
        try {
          answer = JSON.parse(value);
        } catch {
          answer = value;
        }
      }
      result.push({ question_id: parseInt(baseId), answer });
    }
    return result;
  };

  const handlePersonalInfoNext = (selectedTrack: Track) => {
    personalInfo.setField('track', selectedTrack);
    handleNext();
  };

  const handleSubmit = () => {
    const personalPayload = personalInfo.toApiPayload();
    submitMutation.mutate(
      {
        ...personalPayload,
        recruitment_id: recruitmentId,
        answers: buildAnswers(),
      } as ApplicationRequest,
      { onSuccess: clearDraft }
    );
  };

  const trackSectionProps = {
    answers,
    onAnswerChange: setAnswer,
    onPrev: handlePrev,
  };

  return (
    <main className={styles.container}>
      <ApplyTitleSection currentStep={currentStep} title={`${STEPS[currentStep]} 입력`} />

      <section className={styles.content}>
        {currentStep === 0 && (
          <PersonalInfoSection formContext={personalInfo} onNext={handlePersonalInfoNext} />
        )}

        {currentStep === 1 && (
          <CommonQuestionSection
            questions={commonQuestions}
            answers={answers}
            onAnswerChange={setAnswer}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        )}

        {currentStep === 2 && track === 'ANALYSIS' && (
          <AnalysisQuestionSection
            {...trackSectionProps}
            questions={trackQuestions}
            onNext={handleSubmit}
            nextLabel="제출하기"
          />
        )}
        {currentStep === 2 && track === 'VISUALIZATION' && (
          <VisualizationQuestionSection
            {...trackSectionProps}
            questions={trackQuestions}
            onNext={handleSubmit}
            nextLabel="제출하기"
          />
        )}
        {currentStep === 2 && track === 'ENGINEERING' && (
          <EngineeringQuestionSection
            {...trackSectionProps}
            questions={trackQuestions}
            onNext={handleSubmit}
            nextLabel="제출하기"
          />
        )}
      </section>
    </main>
  );
};

export default ApplyPage;
