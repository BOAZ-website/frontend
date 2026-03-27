import ArrowLeft from '@/shared/assets/icons/ic_arrow_left.svg?react';
import ArrowRight from '@/shared/assets/icons/ic_arrow_right.svg?react';
import TextField from '@/shared/components/textfield/textfield';

import * as styles from './common-question-section.css';

interface CommonQuestionSectionProps {
  onPrev: () => void;
  onNext: () => void;
}

export const CommonQuestionSection = ({ onPrev, onNext }: CommonQuestionSectionProps) => {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.titleContainer}>
          <h2 className={styles.sectionTitle}>
            자기소개와 BOAZ 데이터 분석 부문에 지원한 동기를 서술해주세요.
          </h2>
          <p className={styles.sectionDescription}>(공백 포함 500자 이내)</p>
        </div>
        <TextField placeholder="내용을 입력해주세요." maxLength={500} />
      </section>

      <section className={styles.section}>
        <div className={styles.titleContainer}>
          <h2 className={styles.sectionTitle}>
            본인을 나타낼 수 있는 기존의 활동 경험을 작성해주세요. (동아리, 대외 활동 등)
          </h2>
          <p className={styles.sectionDescription}>(공백 포함 500자 이내)</p>
        </div>
        <TextField placeholder="내용을 입력해주세요." maxLength={500} />
      </section>

      <section className={styles.section}>
        <div className={styles.titleContainer}>
          <h2 className={styles.sectionTitle}>
            협업 활동 시 본인이 주로 맡은 역할과 협업 도중 문제 상황이 발생했을 때 이를 해결했던
            본인의 경험을 적어주세요.
          </h2>
          <p className={styles.sectionDescription}>(공백 포함 500자 이내)</p>
        </div>
        <TextField placeholder="내용을 입력해주세요." maxLength={500} />
      </section>

      <section className={styles.section}>
        <div className={styles.titleContainer}>
          <h2 className={styles.sectionTitle}>
            BOAZ 참여를 통해 기대하는 역량 성장 및 경험을 서술해주세요.
          </h2>
          <p className={styles.sectionDescription}>(공백 포함 400자 이내)</p>
        </div>
        <TextField placeholder="내용을 입력해주세요." maxLength={500} />
      </section>

      <div className={styles.footer}>
        <div className={styles.navButton} onClick={onPrev}>
          <ArrowLeft /> 이전 페이지
        </div>
        <div className={styles.navButton} onClick={onNext}>
          다음 페이지 <ArrowRight />
        </div>
      </div>
    </div>
  );
};
