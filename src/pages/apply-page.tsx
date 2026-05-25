import { useEffect, useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { ACADEMIC_GRADES, SEMESTERS } from '@/widgets/apply/apply-dropdown';
import { loadLocalDraft } from '@/widgets/apply/model/apply-draft';
import { APPLY_QUERY_OPTIONS } from '@/widgets/apply/model/query-options';
import { useGetDraft } from '@/widgets/apply/model/use-get-draft';
import type { PersonalInfoForm } from '@/widgets/apply/model/use-personal-info-form';
import { usePersonalInfoForm } from '@/widgets/apply/model/use-personal-info-form';
import { usePutDraft } from '@/widgets/apply/model/use-put-draft';
import { useSaveDraft } from '@/widgets/apply/model/use-save-draft';
import { useSubmitApplication } from '@/widgets/apply/model/use-submit-application';
import AnalysisQuestionSection from '@/widgets/apply/ui/analysis-question-section';
import ApplyTitleSection from '@/widgets/apply/ui/apply-title-section';
import CommonQuestionSection from '@/widgets/apply/ui/common-question-section';
import EngineeringQuestionSection from '@/widgets/apply/ui/engineering-question-section';
import PersonalInfoSection from '@/widgets/apply/ui/personal-info-section';
import VisualizationQuestionSection from '@/widgets/apply/ui/visualization-question-section';
import type { AnswerRequest, ApplicationRequest, DraftRequest, Track } from '@/shared/api/types';
import { useRecruitmentDeadline } from '@/shared/queries/use-recruitment-deadline';

import * as styles from './apply-page.css';

const STEPS = ['지원자 정보', '공통 질문', '부문 질문'] as const;
const LAST_STEP = STEPS.length - 1;

const parseBirthDate = (birthDate: string) => {
  const [year, month, day] = birthDate.split('-');
  return {
    birthYear: `${year}년`,
    birthMonth: `${parseInt(month)}월`,
    birthDay: `${parseInt(day)}일`,
  };
};

const parseGraduationDate = (graduationDate: string) => {
  const [year, month] = graduationDate.split('-');
  return {
    graduationYear: `${year}년`,
    graduationMonth: `${parseInt(month)}월`,
  };
};

const parseLastSemester = (lastSemester: number) => {
  const gradeIndex = Math.floor((lastSemester - 1) / 2);
  const semesterIndex = (lastSemester - 1) % 2;
  return {
    academicGrade: ACADEMIC_GRADES[gradeIndex] ?? '',
    semester: SEMESTERS[semesterIndex] ?? '',
  };
};

const ApplyPage = () => {
  const { data: deadline } = useRecruitmentDeadline();
  const recruitmentId = deadline?.recruitment_id ?? 0;

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const personalInfo = usePersonalInfoForm();

  const draftQueryState = useGetDraft(recruitmentId);
  const draftRestoredRef = useRef(false);

  useEffect(() => {
    if (draftRestoredRef.current || recruitmentId === 0) {
      return;
    }
    if (draftQueryState.state === 'loading') {
      return;
    }

    draftRestoredRef.current = true;

    // 1순위: 서버 draft
    if (draftQueryState.state === 'draft') {
      const d = draftQueryState.data;

      if (d.track && d.track !== 'ALL') {
        personalInfo.setField('track', d.track);
      }
      if (d.name) {
        personalInfo.setField('name', d.name);
      }
      if (d.email) {
        personalInfo.setField('email', d.email);
      }
      if (d.phone) {
        personalInfo.setField('phone', d.phone);
      }
      if (d.university) {
        personalInfo.setField('university', d.university);
      }
      if (d.major) {
        personalInfo.setField('major', d.major);
      }
      if (d.minor_double_major) {
        personalInfo.setField('additionalDegrees', d.minor_double_major);
      }
      if (d.military_status) {
        personalInfo.setField('militaryStatus', d.military_status);
      }
      if (d.grad_school_plan !== undefined && d.grad_school_plan !== null) {
        personalInfo.setField('gradSchoolPlan', d.grad_school_plan);
      }
      if (d.birth_date) {
        const { birthYear, birthMonth, birthDay } = parseBirthDate(d.birth_date);
        personalInfo.setField('birthYear', birthYear);
        personalInfo.setField('birthMonth', birthMonth);
        personalInfo.setField('birthDay', birthDay);
      }
      if (d.graduation_date) {
        const { graduationYear, graduationMonth } = parseGraduationDate(d.graduation_date);
        personalInfo.setField('graduationYear', graduationYear);
        personalInfo.setField('graduationMonth', graduationMonth);
      }
      if (d.last_semester) {
        const { academicGrade, semester } = parseLastSemester(d.last_semester);
        personalInfo.setField('academicGrade', academicGrade);
        personalInfo.setField('semester', semester);
      }
      if (d.answers && d.answers.length > 0) {
        const restoredAnswers: Record<string, string> = {};
        d.answers.forEach(({ question_id, answer }) => {
          if (question_id == null || answer == null) {
            return;
          }
          restoredAnswers[String(question_id)] = String(answer);
        });
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setAnswers(restoredAnswers);
      }
      return;
    }

    // 2순위: 서버 draft 없을 때(404) → 로컬스토리지 fallback
    if (draftQueryState.state === 'empty') {
      const local = loadLocalDraft(recruitmentId);
      if (!local) {
        return;
      }

      const p = local.personalInfo as Partial<PersonalInfoForm>;
      if (p.track) {
        personalInfo.setField('track', p.track);
      }
      if (p.name) {
        personalInfo.setField('name', p.name);
      }
      if (p.email) {
        personalInfo.setField('email', p.email);
      }
      if (p.phone) {
        personalInfo.setField('phone', p.phone);
      }
      if (p.university) {
        personalInfo.setField('university', p.university);
      }
      if (p.major) {
        personalInfo.setField('major', p.major);
      }
      if (p.additionalDegrees) {
        personalInfo.setField('additionalDegrees', p.additionalDegrees);
      }
      if (p.militaryStatus) {
        personalInfo.setField('militaryStatus', p.militaryStatus);
      }
      if (p.gradSchoolPlan !== undefined && p.gradSchoolPlan !== null) {
        personalInfo.setField('gradSchoolPlan', p.gradSchoolPlan);
      }
      if (p.birthYear) {
        personalInfo.setField('birthYear', p.birthYear);
      }
      if (p.birthMonth) {
        personalInfo.setField('birthMonth', p.birthMonth);
      }
      if (p.birthDay) {
        personalInfo.setField('birthDay', p.birthDay);
      }
      if (p.graduationYear) {
        personalInfo.setField('graduationYear', p.graduationYear);
      }
      if (p.graduationMonth) {
        personalInfo.setField('graduationMonth', p.graduationMonth);
      }
      if (p.academicGrade) {
        personalInfo.setField('academicGrade', p.academicGrade);
      }
      if (p.semester) {
        personalInfo.setField('semester', p.semester);
      }

      if (local.answers) {
        setAnswers(local.answers);
      }
    }
  }, [draftQueryState, personalInfo, recruitmentId]);

  const { form } = personalInfo;
  const track = form.track;

  const draftPayload: DraftRequest = {
    track: track ?? undefined,
    name: form.name || undefined,
    email: form.email || undefined,
    phone: form.phone || undefined,
    university: form.university || undefined,
    major: form.major || undefined,
    minor_double_major: form.additionalDegrees.length > 0 ? form.additionalDegrees : undefined,
    military_status: form.militaryStatus ?? undefined,
    grad_school_plan: form.gradSchoolPlan ?? undefined,
    ...(() => {
      try {
        const payload = personalInfo.toApiPayload();
        return {
          birth_date: payload.birth_date || undefined,
          graduation_date: payload.graduation_date || undefined,
          last_semester: payload.last_semester || undefined,
        };
      } catch {
        return {};
      }
    })(),
    answers: Object.entries(answers)
      .filter(([key]) => !key.includes('__extra_'))
      .map(([key, value]) => ({
        question_id: parseInt(key),
        answer: value,
      })),
  };

  const isRestoredOrEmpty =
    // eslint-disable-next-line react-hooks/refs
    draftRestoredRef.current ||
    (draftQueryState.state !== 'loading' && draftQueryState.state === 'empty');

  // 로컬스토리지 자동저장 (500ms debounce)
  useSaveDraft({
    recruitmentId,
    personalInfo: form,
    answers,
    enabled: isRestoredOrEmpty,
  });

  // 서버 동기화 (10초 interval + beforeunload flush + 버튼 클릭)
  const { handleClickSaveDraft, isPutDraftPending } = usePutDraft({
    recruitmentId,
    draft: draftPayload,
    enabled: isRestoredOrEmpty,
  });

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

  const handleTrackChange = () => {
    setAnswers({});
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
    submitMutation.mutate({
      ...personalPayload,
      recruitment_id: recruitmentId,
      answers: buildAnswers(),
    } as ApplicationRequest);
  };

  const trackSectionProps = {
    answers,
    onAnswerChange: setAnswer,
    onPrev: handlePrev,
  };

  // 403 - 이미 제출된 경우
  // TODO: 제출 완료 전용 컴포넌트로 교체
  if (draftQueryState.state === 'submitted') {
    return (
      <main className={styles.container}>
        <p>이미 제출된 지원서가 있습니다.</p>
      </main>
    );
  }

  return (
    <main className={styles.container}>
      <ApplyTitleSection currentStep={currentStep} title={`${STEPS[currentStep]} 입력`} />

      {/* 임시저장 버튼 */}
      {/* TODO: 스타일 적용 및 토스트 연동 후 버튼 컴포넌트로 교체 */}
      <button type="button" onClick={handleClickSaveDraft} disabled={isPutDraftPending}>
        {isPutDraftPending ? '저장 중...' : '임시저장'}
      </button>

      <section className={styles.content}>
        {currentStep === 0 && (
          <PersonalInfoSection
            formContext={personalInfo}
            onNext={handlePersonalInfoNext}
            onTrackChange={handleTrackChange}
          />
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
