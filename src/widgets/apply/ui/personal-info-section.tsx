import { useState } from 'react';

import {
  ACADEMIC_GRADES,
  BIRTH_YEARS,
  DAYS,
  GRADUATION_YEARS,
  MONTHS,
  SEMESTERS,
} from '@/widgets/apply/apply-dropdown';
import { usePersonalInfoForm } from '@/widgets/apply/model/use-personal-info-form';
import type { MilitaryStatus, Track } from '@/shared/api/types';
import ArrowRight from '@/shared/assets/icons/ic_arrow_right.svg?react';
import WarningIcon from '@/shared/assets/icons/ic_warning.svg?react';
import DropdownField from '@/shared/components/dropdown/dropdownField';
import RadioGroup from '@/shared/components/radio-button/radio-group';
import Textfield from '@/shared/components/textfield/textfield';

import * as styles from './personal-info-section.css';

const TRACK_OPTIONS = [
  { label: '데이터 분석', value: 'ANALYSIS' },
  { label: '데이터 시각화', value: 'VISUALIZATION' },
  { label: '데이터 엔지니어링', value: 'ENGINEERING' },
];

const MILITARY_OPTIONS = [
  { label: '필 또는 면제(여성)', value: 'COMPLETED_OR_EXEMPT' },
  { label: '미필', value: 'NOT_COMPLETED' },
];

const GRAD_SCHOOL_OPTIONS = [
  { label: '예', value: 'true' },
  { label: '아니오', value: 'false' },
];

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
const isValidPhone = (value: string) => /^01[0-9]{8,9}$/.test(value.trim());
const preventEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
  if (e.key === 'Enter') {
    e.preventDefault();
  }
};
const TRACK_LABEL: Record<Track, string> = {
  ANALYSIS: '데이터 분석',
  VISUALIZATION: '데이터 시각화',
  ENGINEERING: '데이터 엔지니어링',
};

const FieldError = ({
  show,
  message = '필수 입력 항목입니다.',
}: {
  show: boolean;
  message?: string;
}) =>
  show ? (
    <p className={styles.fieldError}>
      <WarningIcon width={16} height={16} />
      <span>{message}</span>
    </p>
  ) : null;

interface PersonalInfoSectionProps {
  formContext: ReturnType<typeof usePersonalInfoForm>;
  onNext: (track: Track) => void;
  onTrackChange?: () => void;
}

const PersonalInfoSection = ({ formContext, onNext, onTrackChange }: PersonalInfoSectionProps) => {
  const { form, setField, addDegree, setDegree, removeDegree } = formContext;
  const [submitted, setSubmitted] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [phoneTouched, setPhoneTouched] = useState(false);

  const handleTrackChange = (value: string | null) => {
    const nextTrack = value as Track | null;

    if (form.track && form.track !== nextTrack) {
      const currentLabel = TRACK_LABEL[form.track];
      const confirmed = window.confirm(
        `부문을 변경할 경우 ${currentLabel} 부문의 기존 임시저장 내역이 사라지게 됩니다. 계속 진행하시겠습니까?`
        // TODO: 모달 컴포넌트로 교체
      );
      if (!confirmed) {
        return;
      }
      onTrackChange?.();
    }

    setField('track', nextTrack);
  };

  const emailError =
    submitted || emailTouched
      ? !form.email.trim()
        ? '필수 입력 항목입니다.'
        : !isValidEmail(form.email)
          ? '이메일 형식이 올바르지 않습니다.'
          : null
      : null;

  const phoneError =
    submitted || phoneTouched
      ? !form.phone.trim()
        ? '필수 입력 항목입니다.'
        : !isValidPhone(form.phone)
          ? '전화번호 형식이 올바르지 않습니다. (예: 01012345678)'
          : null
      : null;

  const handleNext = () => {
    setSubmitted(true);
    const hasEmptyRequired = [form.name, form.email, form.phone, form.university, form.major].some(
      (v) => !v.trim()
    );
    const hasFormatError =
      (form.email.trim() && !isValidEmail(form.email)) ||
      (form.phone.trim() && !isValidPhone(form.phone));

    if (
      !form.track ||
      hasEmptyRequired ||
      hasFormatError ||
      form.militaryStatus === null ||
      form.gradSchoolPlan === null ||
      !form.academicGrade ||
      !form.semester
    ) {
      window.alert(
        '입력하지 않은 항목이 있거나 형식이 올바르지 않습니다.\n항목을 다시 확인해 주세요.'
      );
      return;
    }
    onNext(form.track);
  };

  return (
    <div className={styles.container}>
      {/* 지원 부문 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>지원 부문</h2>
        <div className={styles.groupContainer}>
          <RadioGroup
            name="track"
            options={TRACK_OPTIONS}
            value={form.track}
            className={styles.radioButton}
            onChange={handleTrackChange}
          />
          <FieldError show={submitted && !form.track} />
        </div>
      </section>

      {/* 개인정보 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>개인정보</h2>
        <div className={styles.groupContainer}>
          <Textfield
            placeholder="이름"
            value={form.name}
            isError={submitted && !form.name.trim()}
            onChange={(e) => setField('name', e.target.value)}
          />
          <FieldError show={submitted && !form.name.trim()} />
        </div>
        <div className={styles.row}>
          <DropdownField
            label="연도"
            options={BIRTH_YEARS}
            defaultValue={form.birthYear}
            onChange={(v) => setField('birthYear', v)}
          />
          <DropdownField
            label="월"
            options={MONTHS}
            defaultValue={form.birthMonth}
            onChange={(v) => setField('birthMonth', v)}
          />
          <DropdownField
            label="일"
            options={DAYS}
            defaultValue={form.birthDay}
            onChange={(v) => setField('birthDay', v)}
          />
        </div>
      </section>

      {/* 연락처 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>연락처</h2>
        <p className={styles.sectionDescription}>
          합격 결과가 전달될 예정이므로 정확하게 작성해 주세요.
        </p>
        <div className={styles.groupContainer}>
          <Textfield
            placeholder="이메일"
            value={form.email}
            isError={!!emailError}
            onChange={(e) => setField('email', e.target.value)}
            onBlur={() => setEmailTouched(true)}
            onKeyDown={preventEnter}
          />
          <FieldError show={!!emailError} message={emailError ?? undefined} />
        </div>
        <div className={styles.groupContainer}>
          <Textfield
            placeholder="01012345678"
            value={form.phone}
            isError={!!phoneError}
            onChange={(e) => setField('phone', e.target.value)}
            onBlur={() => setPhoneTouched(true)}
            onKeyDown={preventEnter}
          />
          <FieldError show={!!phoneError} message={phoneError ?? undefined} />
        </div>
      </section>

      {/* 병역 이수 여부 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>병역 이수 여부</h2>
        <div className={styles.groupContainer}>
          <RadioGroup
            name="military"
            options={MILITARY_OPTIONS}
            value={form.militaryStatus}
            className={styles.radioButton}
            onChange={(value) => setField('militaryStatus', value as MilitaryStatus | null)}
          />
          <FieldError show={submitted && form.militaryStatus === null} />
        </div>
      </section>

      {/* 학력사항 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>학력사항</h2>
        <div className={styles.groupContainer}>
          <Textfield
            placeholder="재학 학교명"
            value={form.university}
            isError={submitted && !form.university.trim()}
            onChange={(e) => setField('university', e.target.value)}
          />
          <FieldError show={submitted && !form.university.trim()} />
        </div>
        <div className={styles.groupContainer}>
          <Textfield
            placeholder="컴퓨터공학과"
            value={form.major}
            isError={submitted && !form.major.trim()}
            onChange={(e) => setField('major', e.target.value)}
          />
          <FieldError show={submitted && !form.major.trim()} />
        </div>
        {form.additionalDegrees.map((degree, index) => (
          <div key={index} className={styles.degreeRow}>
            <Textfield
              placeholder="학과명"
              value={degree}
              onChange={(e) => setDegree(index, e.target.value)}
            />
            <button
              type="button"
              className={styles.removeDegreeButton}
              onClick={() => removeDegree(index)}
            >
              삭제
            </button>
          </div>
        ))}
        {form.additionalDegrees.length < 3 && (
          <div className={styles.addDegree} onClick={addDegree}>
            + 복수/부전공
          </div>
        )}
      </section>

      {/* 마지막 재학 학기 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>마지막 재학 학기</h2>
        <div className={styles.row}>
          <DropdownField
            label="학년"
            options={ACADEMIC_GRADES}
            defaultValue={form.academicGrade}
            onChange={(v) => setField('academicGrade', v)}
          />
          <DropdownField
            label="학기"
            options={SEMESTERS}
            defaultValue={form.semester}
            onChange={(v) => setField('semester', v)}
          />
        </div>
      </section>

      {/* 졸업 예정시점 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>졸업 예정시점</h2>
        <div className={styles.row}>
          <DropdownField
            label="졸업년도"
            options={GRADUATION_YEARS}
            defaultValue={form.graduationYear}
            onChange={(v) => setField('graduationYear', v)}
          />
          <DropdownField
            label="졸업월"
            options={MONTHS}
            defaultValue={form.graduationMonth}
            onChange={(v) => setField('graduationMonth', v)}
          />
        </div>
      </section>

      {/* 대학원 진학 여부 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>대학원 진학 여부</h2>
        <div className={styles.groupContainer}>
          <RadioGroup
            name="gradSchool"
            options={GRAD_SCHOOL_OPTIONS}
            value={form.gradSchoolPlan === null ? null : String(form.gradSchoolPlan)}
            className={styles.radioButton}
            onChange={(value) =>
              setField('gradSchoolPlan', value === null ? null : value === 'true')
            }
          />
          <FieldError show={submitted && form.gradSchoolPlan === null} />
        </div>
      </section>

      <div className={styles.footer} onClick={handleNext}>
        <div>다음페이지</div> <ArrowRight />
      </div>
    </div>
  );
};

export default PersonalInfoSection;
