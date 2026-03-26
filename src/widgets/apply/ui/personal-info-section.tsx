import { useState } from 'react';

import {
  ACADEMIC_GRADES,
  BIRTH_YEARS,
  DAYS,
  GRADUATION_YEARS,
  MONTHS,
  SEMESTERS,
} from '@/widgets/apply/apply-dropdown.ts';
import ArrowRight from '@/shared/assets/icons/ic_arrow_right.svg?react';
import DropdownField from '@/shared/components/dropdown/dropdownField';
import RadioButton from '@/shared/components/radio-button/radio-button';
import Textfield from '@/shared/components/textfield/textfield';

import * as styles from './personal-info-section.css';

interface PersonalInfoSectionProps {
  onNext: () => void;
}

export const PersonalInfoSection = ({ onNext }: PersonalInfoSectionProps) => {
  const [additionalDegrees, setAdditionalDegrees] = useState<string[]>([]);
  const [birthYear, setBirthYear] = useState('2026년');
  const [birthMonth, setBirthMonth] = useState('3월');
  const [birthDay, setBirthDay] = useState('25일');
  const [academicGrades, setAcademicGrade] = useState('4학년');
  const [semesters, setSemesters] = useState('1학기');
  const [graduationYears, setGraduationYears] = useState('2027년');
  const [graduationMonth, setGraduationMonth] = useState('8월');

  const handleAddDegree = () => {
    setAdditionalDegrees([...additionalDegrees, '']);
  };
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>개인정보</h2>
        <Textfield placeholder="보아즈 디자인 노예" />

        <div className={styles.row}>
          <DropdownField
            label="연도"
            options={BIRTH_YEARS}
            defaultValue={birthYear}
            onChange={setBirthYear}
          />
          <DropdownField
            label="월"
            options={MONTHS}
            defaultValue={birthMonth}
            onChange={setBirthMonth}
          />
          <DropdownField label="일" options={DAYS} defaultValue={birthDay} onChange={setBirthDay} />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>연락처</h2>
        <p className={styles.sectionDescription}>
          합격 결과가 전달될 예정이므로 정확하게 작성해 주세요.
        </p>
        <Textfield placeholder="이메일" />
        <Textfield placeholder="010-1234-1234" />
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>병역 이수 여부</h2>
        <div className={styles.radioButton}>
          <RadioButton label="필 또는 면제(여성)" value="yes" />
          <RadioButton label="미필" value="no" />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>학력사항</h2>
        <Textfield placeholder="재학 학교명" />
        <Textfield placeholder="컴퓨터공학과" />

        {additionalDegrees.map((_, index) => (
          <Textfield key={index} placeholder="학과명" />
        ))}

        <div className={styles.addDegree} onClick={handleAddDegree}>
          + 복수/부전공
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>마지막 재학 학기</h2>
        <div className={styles.row}>
          <DropdownField
            label="재학학년"
            options={ACADEMIC_GRADES}
            defaultValue={academicGrades}
            onChange={setAcademicGrade}
          />
          <DropdownField
            label="재학학기"
            options={SEMESTERS}
            defaultValue={semesters}
            onChange={setSemesters}
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>졸업 예정시점</h2>
        <div className={styles.row}>
          <DropdownField
            label="졸업년도"
            options={GRADUATION_YEARS}
            defaultValue={graduationYears}
            onChange={setGraduationYears}
          />
          <DropdownField
            label="졸업월"
            options={MONTHS}
            defaultValue={graduationMonth}
            onChange={setGraduationMonth}
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>대학원 진학 여부</h2>
        <div className={styles.radioButton}>
          <RadioButton label="예" value="yes" />
          <RadioButton label="아니오" value="no" />
        </div>
      </section>

      <div className={styles.footer} onClick={onNext} style={{ cursor: 'pointer' }}>
        <div>다음페이지</div> <ArrowRight />
      </div>
    </div>
  );
};
