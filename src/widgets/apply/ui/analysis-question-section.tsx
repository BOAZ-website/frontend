import { useState } from 'react';
import type { ChangeEvent } from 'react';

import type { QuestionResponse } from '@/shared/api/types';
import ArrowLeft from '@/shared/assets/icons/ic_arrow_left.svg?react';
import ArrowRight from '@/shared/assets/icons/ic_arrow_right.svg?react';
import TextFieldWithCounter from '@/shared/components/textfield-with-counter/textfield-with-counter';

import * as styles from './analysis-question-section.css';

interface AnalysisQuestionSectionProps {
  questions: QuestionResponse[];
  answers: Record<string, string>;
  onAnswerChange: (questionId: string, value: string) => void;
  onPrev: () => void;
  onNext: () => void;
}

const AnalysisQuestionSection = ({
  questions,
  answers,
  onAnswerChange,
  onPrev,
  onNext,
}: AnalysisQuestionSectionProps) => {
  const [additionalProjectCount, setAdditionalProjectCount] = useState(0);

  const sorted = [...questions].sort((a, b) => (a.order_num ?? 0) - (b.order_num ?? 0));
  const textQuestions = sorted.filter((q) => q.type !== 'TABLE');
  const projectQuestion = textQuestions.at(-1);
  const regularQuestions = textQuestions.slice(0, -1);

  return (
    <div className={styles.container}>
      {regularQuestions.map((question) => (
        <section key={question.question_id} className={styles.section}>
          <div className={styles.titleContainer}>
            <h2 className={styles.sectionTitle}>{question.content}</h2>
            {question.limit_length && (
              <p className={styles.sectionDescription}>
                (공백 포함 {question.limit_length}자 이내)
              </p>
            )}
          </div>
          <TextFieldWithCounter
            maxLength={question.limit_length ?? 500}
            value={answers[question.question_id!] ?? ''}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              onAnswerChange(question.question_id!.toString(), e.target.value)
            }
          />
        </section>
      ))}

      {projectQuestion && (
        <section className={styles.section}>
          <div className={styles.titleContainer}>
            <h2 className={styles.sectionTitle}>{projectQuestion.content}</h2>
            {projectQuestion.limit_length && (
              <p className={styles.sectionDescription}>
                (공백 포함 {projectQuestion.limit_length}자 이내)
              </p>
            )}
          </div>
          <TextFieldWithCounter
            maxLength={projectQuestion.limit_length ?? 500}
            value={answers[projectQuestion.question_id!] ?? ''}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              onAnswerChange(projectQuestion.question_id!.toString(), e.target.value)
            }
          />
          {Array.from({ length: additionalProjectCount }, (_, i) => (
            <TextFieldWithCounter
              key={i}
              maxLength={projectQuestion.limit_length ?? 500}
              value={answers[`${projectQuestion.question_id}__extra_${i}`] ?? ''}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                onAnswerChange(`${projectQuestion.question_id}__extra_${i}`, e.target.value)
              }
            />
          ))}
          <div
            className={styles.addProject}
            onClick={() => setAdditionalProjectCount((prev) => prev + 1)}
          >
            + 프로젝트 추가하기
          </div>
        </section>
      )}

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

export default AnalysisQuestionSection;
