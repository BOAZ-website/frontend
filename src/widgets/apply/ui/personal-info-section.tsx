import Textfield from '@/shared/components/textfield/textfield';

import * as styles from './personal-info-section.css';

export const PersonalInfoSection = () => {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>개인정보</h2>
        <Textfield placeholder="보아즈 디자인 노예" />

        <div className={styles.row}>
          <Textfield placeholder="연도" />
          <Textfield placeholder="월" />
          <Textfield placeholder="일" />
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
        <h2 className={styles.sectionTitle}>학력사항</h2>
        <Textfield placeholder="재학 학교명" />
        <Textfield placeholder="컴퓨터공학과" />

        <div className={styles.row}>
          <Textfield placeholder="학년" />
          <Textfield placeholder="학기" />
        </div>
      </section>
    </div>
  );
};
