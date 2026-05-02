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

const FieldError = ({ show }: { show: boolean }) =>
  show ? <p className={styles.errorText}>필수 입력 항목입니다.</p> : null;

interface PersonalInfoSectionProps {
  formContext: ReturnType<typeof usePersonalInfoForm>;
  onNext: (track: Track) => void;
}

const PersonalInfoSection = ({ formContext, onNext }: PersonalInfoSectionProps) => {
  const { form, setField, addDegree, setDegree } = formContext;
  const [submitted, setSubmitted] = useState(false);

  const handleNext = () => {
    setSubmitted(true);
    const hasEmptyRequired = [form.name, form.email, form.phone, form.university, form.major].some(
      (v) => !v.trim()
    );
    if (
      !form.track ||
      hasEmptyRequired ||
      form.militaryStatus === null ||
      form.gradSchoolPlan === null
    ) {
      return;
    }
    onNext(form.track);
  };

  return (
    <div className={styles.container}>
      {/* 지원 부문 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>지원 부문</h2>
        <RadioGroup
          name="track"
          options={TRACK_OPTIONS}
          value={form.track}
          className={styles.radioButton}
          onChange={(value) => setField('track', value as Track | null)}
        />
        <FieldError show={submitted && !form.track} />
      </section>

      {/* 개인정보 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>개인정보</h2>
        <Textfield
          placeholder="이름"
          value={form.name}
          isError={submitted && !form.name.trim()}
          onChange={(e) => setField('name', e.target.value)}
        />
        <FieldError show={submitted && !form.name.trim()} />
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
        <Textfield
          placeholder="이메일"
          value={form.email}
          isError={submitted && !form.email.trim()}
          onChange={(e) => setField('email', e.target.value)}
        />
        <FieldError show={submitted && !form.email.trim()} />
        <Textfield
          placeholder="01012345678"
          value={form.phone}
          isError={submitted && !form.phone.trim()}
          onChange={(e) => setField('phone', e.target.value)}
        />
        <FieldError show={submitted && !form.phone.trim()} />
      </section>

      {/* 병역 이수 여부 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>병역 이수 여부</h2>
        <RadioGroup
          name="military"
          options={MILITARY_OPTIONS}
          value={form.militaryStatus}
          className={styles.radioButton}
          onChange={(value) => setField('militaryStatus', value as MilitaryStatus | null)}
        />
        <FieldError show={submitted && form.militaryStatus === null} />
      </section>

      {/* 학력사항 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>학력사항</h2>
        <Textfield
          placeholder="재학 학교명"
          value={form.university}
          isError={submitted && !form.university.trim()}
          onChange={(e) => setField('university', e.target.value)}
        />
        <FieldError show={submitted && !form.university.trim()} />
        <Textfield
          placeholder="컴퓨터공학과"
          value={form.major}
          isError={submitted && !form.major.trim()}
          onChange={(e) => setField('major', e.target.value)}
        />
        <FieldError show={submitted && !form.major.trim()} />
        {form.additionalDegrees.map((degree, index) => (
          <Textfield
            key={index}
            placeholder="학과명"
            value={degree}
            onChange={(e) => setDegree(index, e.target.value)}
          />
        ))}
        <div className={styles.addDegree} onClick={addDegree}>
          + 복수/부전공
        </div>
      </section>

      {/* 마지막 재학 학기 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>마지막 재학 학기</h2>
        <div className={styles.row}>
          <DropdownField
            label="재학학년"
            options={ACADEMIC_GRADES}
            defaultValue={form.academicGrade}
            onChange={(v) => setField('academicGrade', v)}
          />
          <DropdownField
            label="재학학기"
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
        <RadioGroup
          name="gradSchool"
          options={GRAD_SCHOOL_OPTIONS}
          value={form.gradSchoolPlan === null ? null : String(form.gradSchoolPlan)}
          className={styles.radioButton}
          onChange={(value) => setField('gradSchoolPlan', value === null ? null : value === 'true')}
        />
        <FieldError show={submitted && form.gradSchoolPlan === null} />
      </section>

      <div className={styles.footer} onClick={handleNext}>
        <div>다음페이지</div> <ArrowRight />
      </div>
    </div>
  );
};

export default PersonalInfoSection;
