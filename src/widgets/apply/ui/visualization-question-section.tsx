import { useState } from 'react';

import ArrowLeft from '@/shared/assets/icons/ic_arrow_left.svg?react';
import ArrowRight from '@/shared/assets/icons/ic_arrow_right.svg?react';
import TextFieldWithCounter from '@/shared/components/textfield-with-counter/textfield-with-counter';

import * as styles from '@/widgets/apply/ui/visualization-question-section.css';

interface VisualizationQuestionSectionProps {
  onPrev: () => void;
  onNext: () => void;
}

export const VisualizationQuestionSection = ({
  onPrev,
  onNext,
}: VisualizationQuestionSectionProps) => {
  const [additionalProjects, setAdditionalProjects] = useState<string[]>([]);

  const handleAddProject = () => {
    setAdditionalProjects([...additionalProjects, '']);
  };
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.sectionExperienceTitle}>데이터 시각화 관련 Tool 활용 경험</div>
      </section>
      <section className={styles.section}>
        <div className={styles.stackQuestion}>Tableau</div>
        <div className={styles.radioButton}></div>
      </section>
      <section className={styles.section}>
        <div className={styles.stackQuestion}>Python</div>
        <div className={styles.radioButton}></div>
      </section>
      <section className={styles.section}>
        <div className={styles.stackQuestion}>R</div>
        <div className={styles.radioButton}></div>
      </section>
      <section className={styles.section}>
        <div className={styles.sectionExperienceTitle}>Power BI</div>
        <div className={styles.radioButton}></div>
      </section>
      <section className={styles.section}>
        <div className={styles.sectionExperienceTitle}>QGIS</div>
        <div className={styles.radioButton}></div>
      </section>
      <section className={styles.section}>
        <div className={styles.sectionExperienceTitle}>Figma</div>
        <div className={styles.radioButton}></div>
      </section>
      <section className={styles.section}>
        <div className={styles.titleContainer}>
          <h2 className={styles.sectionTitle}>
            데이터 관련 수강 과목(교내, 교외) 혹은 세미나 경험이 있다면 적어주세요.
          </h2>
          <p className={styles.sectionDescription}>(공백 포함 600자 이내)</p>
        </div>
        <TextFieldWithCounter maxLength={600} />
      </section>

      <section className={styles.section}>
        <div className={styles.titleContainer}>
          <h2 className={styles.sectionTitle}>
            본인이 진행했던 시각화를 통해 인사이트를 도출한 경험을 소개해주세요. 만약 경험이 없다면
            프로젝트 혹은 시각화와 관련한 공부 경험을 구체적으로 서술해주세요.
          </h2>
          <p className={styles.sectionDescription}>(공백 포함 700자 이내)</p>
        </div>
        <TextFieldWithCounter maxLength={700} />
      </section>

      <section className={styles.section}>
        <div className={styles.titleContainer}>
          <h2 className={styles.sectionTitle}>
            새로운 도구나 기술을 배울 때의 본인의 모습을 구체적으로 서술해주세요.
          </h2>
          <p className={styles.sectionDescription}>(공백 포함 500자 이내)</p>
        </div>
        <TextFieldWithCounter maxLength={500} />
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
