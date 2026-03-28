import { useState } from 'react';

import ArrowLeft from '@/shared/assets/icons/ic_arrow_left.svg?react';
import ArrowRight from '@/shared/assets/icons/ic_arrow_right.svg?react';
import TextFieldWithCounter from '@/shared/components/textfield-with-counter/textfield-with-counter';

import * as styles from '@/widgets/apply/ui/analysis-question-section.css';

interface AnalysisQuestionSectionProps {
  onPrev: () => void;
  onNext: () => void;
}

export const AnalysisQuestionSection = ({ onPrev, onNext }: AnalysisQuestionSectionProps) => {
  const [additionalProjects, setAdditionalProjects] = useState<string[]>([]);

  const handleAddProject = () => {
    setAdditionalProjects([...additionalProjects, '']);
  };
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.titleContainer}>
          <h2 className={styles.sectionTitle}>
            [빅데이터 / 인공지능 / 머신러닝 / 통계 및 수학]
            관련 수강 과목 혹은 세미나 경험이 있다면 적어주세요.
          </h2>
          <p className={styles.sectionDescription}>(공백 포함 300자 이내)</p>
        </div>
        <TextFieldWithCounter maxLength={300} />
      </section>

      <section className={styles.section}>
        <div className={styles.titleContainer}>
          <h2 className={styles.sectionTitle}>
            본인이 진행했던 [머신러닝 / 딥러닝 / 데이터분석] 관련 프로젝트를 소개해주세요.
            만약 프로젝트 경험이 없다면 관련 활동, 학습 경험을 구체적으로 서술해주세요.
          </h2>
          <p className={styles.sectionDescription}>(공백 포함 700자 이내)</p>
        </div>
        <TextFieldWithCounter maxLength={700} />
      </section>

      <section className={styles.section}>
        <div className={styles.titleContainer}>
          <h2 className={styles.sectionTitle}>
            최근 학습한 기술/모델/논문 중 가장 흥미롭던 내용을 하나 선택해, 
            어떤 부분이 인상적이었는지 구체적으로 서술해주세요.
          </h2>
          <p className={styles.sectionDescription}>(공백 포함 700자 이내)</p>
        </div>
        <TextFieldWithCounter maxLength={700} />
      </section>

      <section className={styles.section}>
        <div className={styles.titleContainer}>
          <h2 className={styles.sectionTitle}>
            최근 본인이 관심을 갖고 있는 도메인과 해당 도메인의 트렌드 서술해주세요.
          </h2>
          <p className={styles.sectionDescription}>(공백 포함 400자 이내)</p>
        </div>
        <TextFieldWithCounter maxLength={400} />
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
