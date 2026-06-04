import { useEffect, useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Navigate } from 'react-router';

import { loadLocalDraft } from '@/widgets/apply/model/apply-draft';
import {
  parseBirthDate,
  parseGraduationDate,
  parseLastSemester,
} from '@/widgets/apply/model/draft-parser';
import { APPLY_QUERY_OPTIONS } from '@/widgets/apply/model/query-options';
import { useGetDraft } from '@/widgets/apply/model/use-get-draft';
import type { PersonalInfoForm } from '@/widgets/apply/model/use-personal-info-form';
import { usePersonalInfoForm } from '@/widgets/apply/model/use-personal-info-form';
import { usePutDraft } from '@/widgets/apply/model/use-put-draft';
import { useSaveDraft } from '@/widgets/apply/model/use-save-draft';
import { useSubmitApplication } from '@/widgets/apply/model/use-submit-application';
import AgreementStep from '@/widgets/apply/ui/agreement-step/agreement-step';
import ApplyTitleSection from '@/widgets/apply/ui/apply-title-section';
import PersonalInfoSection from '@/widgets/apply/ui/personal-info-section';
import QuestionSection from '@/widgets/apply/ui/question-section/question-section';
import { RECRUITMENT_QUERY_OPTIONS } from '@/widgets/recruiting/model/recruitment.query-options';
import type { AnswerRequest, ApplicationRequest, DraftRequest, Track } from '@/shared/api/types';
import { useRecruitmentDeadline } from '@/shared/queries/use-recruitment-deadline';
import { useRecruitmentStatus } from '@/shared/queries/use-recruitment-status';
import { ROUTE_PATH } from '@/shared/router/paths';
import { formatKoreanDate } from '@/shared/utils/date-formatter';

import * as styles from './apply-page.css';

const STEPS = ['지원자 정보 입력', '공통 질문', '부문 질문'] as const;
const LAST_STEP = STEPS.length;

// 임시 목데이터
const MOCK_INTERVIEW_QUESTION = {
  question_id: 9999,
  label: '면접 가능 시간',
  category: 'COMMON' as const,
  type: 'TABLE' as const,
  content: '면접 가능 시간 (복수 선택)',
  limit_length: undefined,
  order_num: 999,
  metadata: {
    rows: ['7월 4일(토)', '7월 5일(일)'],
    columns: ['11:00-13:00', '13:00-15:00', '15:00-17:00', '17:00-19:00', '19:00-21:00'],
    multiple: true,
  },
};

const MOCK_INTERVIEW_DESCRIPTION =
  '면접은 대면으로 진행될 예정입니다. 가능한 면접 시간을 모두 체크해주시기 바랍니다.\n응답이 없을 경우, 모든 면접 시간이 불가능한 것으로 간주될 수 있으니 반드시 작성 부탁드립니다.';

const ApplyPage = () => {
  const { data: deadline } = useRecruitmentDeadline();
  const { data: status } = useRecruitmentStatus();
  const { data: recruitment } = useQuery(RECRUITMENT_QUERY_OPTIONS.DETAIL(status?.term));
  const recruitmentId = deadline?.recruitment_id ?? 0;

  const recruitPeriod =
    recruitment?.start_date && recruitment?.end_date
      ? `${formatKoreanDate(recruitment.start_date)} ~ ${formatKoreanDate(recruitment.end_date)}`
      : undefined;

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const personalInfo = usePersonalInfoForm();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentStep]);

  const draftQueryState = useGetDraft(recruitmentId);
  const draftRestoredRef = useRef(false);

  useEffect(() => {
    if (draftRestoredRef.current || recruitmentId === 0) {
      return;
    }
    if (draftQueryState.state === 'loading') {
      return;
    }

    if (draftQueryState.state === 'submitted') {
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
        const isValidDate = (s: string) => /^\d{4}-\d{2}-\d{2}$/.test(s) && !s.includes('NaN');
        const isValidMonth = (s: string) => /^\d{4}-\d{2}$/.test(s) && !s.includes('NaN');
        return {
          birth_date: isValidDate(payload.birth_date) ? payload.birth_date : undefined,
          graduation_date: isValidMonth(payload.graduation_date)
            ? payload.graduation_date
            : undefined,
          last_semester: payload.last_semester > 0 ? payload.last_semester : undefined,
        };
      } catch {
        return {};
      }
    })(),
    answers: Object.entries(answers)
      .filter(([key]) => !key.includes('__extra_'))
      .map(([key, value]) => ({
        question_id: parseInt(key, 10),
        answer: value,
      })),
  };

  const isRestoredOrEmpty =
    // eslint-disable-next-line react-hooks/refs
    draftRestoredRef.current ||
    (draftQueryState.state !== 'loading' && draftQueryState.state === 'empty');

  useSaveDraft({
    recruitmentId,
    personalInfo: form,
    answers,
    enabled: isRestoredOrEmpty && currentStep > 0,
  });

  const { handleClickSaveDraft, isPutDraftPending, isSaveSuccess } = usePutDraft({
    recruitmentId,
    draft: draftPayload,
    enabled: isRestoredOrEmpty && currentStep > 0,
  });

  const submitMutation = useSubmitApplication(recruitmentId);

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
      if (key.includes('__extra_')) {
        continue;
      }
      const question =
        allQuestions.find((q) => String(q.question_id) === key) ??
        (key === String(MOCK_INTERVIEW_QUESTION.question_id) ? MOCK_INTERVIEW_QUESTION : undefined);
      let answer: unknown = value;
      if (question?.type === 'TABLE') {
        try {
          answer = JSON.parse(value);
        } catch {
          answer = value;
        }
      }
      result.push({ question_id: parseInt(key, 10), answer });
    }
    return result;
  };

  const handlePersonalInfoNext = (selectedTrack: Track) => {
    personalInfo.setField('track', selectedTrack);
    handleNext();
  };

  const handleSubmit = () => {
    const confirmed = window.confirm('제출하면 중복 제출이 불가합니다. 제출하시겠습니까?');
    if (!confirmed) {
      return;
    }
    const personalPayload = personalInfo.toApiPayload();
    submitMutation.mutate({
      ...personalPayload,
      answers: buildAnswers(),
    } as ApplicationRequest);
  };

  const trackSectionProps = {
    answers,
    onAnswerChange: setAnswer,
    onPrev: handlePrev,
  };

  // 모집 기간이 아닐 때 접근 못하도록
  // if (status && status.is_active === false) {
  //   return <Navigate to={ROUTE_PATH.HOME} replace />;
  // }

  // 403 - 이미 제출된 경우
  // TODO: 제출 완료 전용 컴포넌트로 교체
  if (draftQueryState.state === 'submitted') {
    alert('이미 제출된 지원서가 있습니다.');
    return <Navigate to={ROUTE_PATH.HOME} replace />;
  }

  return (
    <main className={currentStep === 0 ? styles.containerAgreement : styles.container}>
      <ApplyTitleSection
        currentStep={currentStep - 1}
        showProgressBar={currentStep > 0}
        showSaveDraft={currentStep > 0}
        title={
          currentStep === 0
            ? `[BOAZ ${status?.term ?? ''}기] 신입 회원 모집`
            : `${STEPS[currentStep - 1]}`
        }
        subtitle={currentStep === 0 ? recruitPeriod : undefined}
        onSaveDraft={handleClickSaveDraft}
        isSavePending={isPutDraftPending}
        isSaveSuccess={isSaveSuccess}
      />

      <section className={styles.content}>
        {currentStep === 0 && (
          <AgreementStep
            term={status?.term}
            brochureUrl={recruitment?.brochure_url}
            onNext={() => {
              handleNext();
            }}
          />
        )}
        {currentStep === 1 && (
          <PersonalInfoSection
            formContext={personalInfo}
            onNext={handlePersonalInfoNext}
            onTrackChange={handleTrackChange}
            interviewQuestion={MOCK_INTERVIEW_QUESTION}
            interviewAnswer={answers[String(MOCK_INTERVIEW_QUESTION.question_id)] ?? ''}
            onInterviewAnswerChange={setAnswer}
            interviewDescription={MOCK_INTERVIEW_DESCRIPTION}
          />
        )}
        {currentStep === 2 && (
          <QuestionSection
            questions={commonQuestions}
            answers={answers}
            onAnswerChange={setAnswer}
            onPrev={handlePrev}
            onNext={handleNext}
            supportsTable
          />
        )}
        {currentStep === 3 && (
          <QuestionSection
            {...trackSectionProps}
            questions={trackQuestions}
            onNext={handleSubmit}
            nextLabel="제출하기"
            supportsTable={track === 'ENGINEERING' || track === 'VISUALIZATION'}
          />
        )}
      </section>
    </main>
  );
};

export default ApplyPage;
