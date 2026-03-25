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

export const PersonalInfoSection = () => {
  const [additionalDegrees, setAdditionalDegrees] = useState<string[]>([]);

  const handleAddDegree = () => {
    setAdditionalDegrees([...additionalDegrees, '']);
  };
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>개인정보</h2>
        <Textfield placeholder="보아즈 디자인 노예" />

        <div className={styles.row}>
          <DropdownField options={BIRTH_YEARS} defaultValue="2026년" />
          <DropdownField options={MONTHS} defaultValue="3월" />
          <DropdownField options={DAYS} defaultValue="25일" />
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
        <div className={styles.addDegree} onClick={handleAddDegree}>
          + 복수/부전공
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>마지막 재학 학기</h2>
        <div className={styles.row}>
          <DropdownField options={ACADEMIC_GRADES} defaultValue="4학년" />
          <DropdownField options={SEMESTERS} defaultValue="1학기" />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>졸업 예정시점</h2>
        <div className={styles.row}>
          <DropdownField options={GRADUATION_YEARS} defaultValue="2026년" />
          <DropdownField options={MONTHS} defaultValue="8월" />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>대학원 진학 여부</h2>
        <div className={styles.radioButton}>
          <RadioButton label="예" value="yes" />
          <RadioButton label="아니오" value="no" />
        </div>
      </section>

      <div className={styles.footer}>
        <div>다음페이지</div> <ArrowRight />
      </div>
    </div>
  );
};
