import { useState } from 'react';

import ArrowLeft from '@/shared/assets/icons/ic_arrow_left.svg?react';
import ArrowRight from '@/shared/assets/icons/ic_arrow_right.svg?react';
import TextFieldWithCounter from '@/shared/components/textfield-with-counter/textfield-with-counter';

import * as styles from '@/widgets/apply/ui/engineering-question-section.css';

interface EngineeringQuestionSectionProps {
  onPrev: () => void;
  onNext: () => void;
}

export const EngineeringQuestionSection = ({ onPrev, onNext }: EngineeringQuestionSectionProps) => {
  const [additionalProjects, setAdditionalProjects] = useState<string[]>([]);

  const handleAddProject = () => {
    setAdditionalProjects([...additionalProjects, '']);
  };
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.sectionExperienceTitle}>데이터 엔지니어링 관련 경험</div>
      </section>
      <section className={styles.section}>
        <div className={styles.stackQuestion}>데이터베이스(관계형 DB, NoSQL 등)</div>
        <div className={styles.radioButton}></div>
      </section>
      <section className={styles.section}>
        <div className={styles.stackQuestion}>서버 및 클라우드 서비스(Linux, Docker, AWS 등)</div>
        <div className={styles.radioButton}></div>
      </section>
      <section className={styles.section}>
        <div className={styles.stackQuestion}>데이터 엔지니어링 오픈 소스(Spark, Kafaka 등)</div>
        <div className={styles.radioButton}></div>
      </section>
      <section className={styles.section}>
        <div className={styles.sectionExperienceTitle}>
          컨테이너 오케스트레이션 도구(Kubernetes 등)
        </div>
        <div className={styles.radioButton}></div>
      </section>
      <section className={styles.section}>
        <div className={styles.sectionExperienceTitle}>언어 (Python, Java, Scala 중 1)</div>
        <div className={styles.radioButton}></div>
      </section>
      <section className={styles.section}>
        <div className={styles.titleContainer}>
          <h2 className={styles.sectionTitle}>
            데이터 엔지니어링 관련 수강 과목(교내, 교외) 혹은 세미나 경험이 있다면 적어주세요.
          </h2>
          <p className={styles.sectionDescription}>(공백 포함 600자 이내)</p>
        </div>
        <TextFieldWithCounter maxLength={600} />
      </section>

      <section className={styles.section}>
        <div className={styles.titleContainer}>
          <h2 className={styles.sectionTitle}>
            데이터 엔지니어링 분야 중 관심있는 세부 분야와 해당 분야와 관련된 경험 및 활동에 대해
            서술해주세요.
          </h2>
          <p className={styles.sectionDescription}>(공백 포함 700자 이내)</p>
        </div>
        <TextFieldWithCounter maxLength={700} />
      </section>

      <section className={styles.section}>
        <div className={styles.titleContainer}>
          <h2 className={styles.sectionTitle}>
            자신의 활동 중에서 특히 어필하고 싶은 프로젝트가 있다면, 관련 링크(Github, Notion 등)와
            함께 소개해주세요. 그중에서도 강조하고 싶은 부분이 있다면 간단히 설명해주세요.
          </h2>
          <p className={styles.sectionDescription}>(공백 포함 500자 이내)</p>
        </div>
        <TextFieldWithCounter maxLength={500} />

        {additionalProjects.map((_, index) => (
          <TextFieldWithCounter key={index} maxLength={500} />
        ))}

        <div className={styles.addProject} onClick={handleAddProject}>
          + 프로젝트 추가하기
        </div>
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
