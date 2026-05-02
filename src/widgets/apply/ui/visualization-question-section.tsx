import { useState } from 'react';
import type { ChangeEvent } from 'react';

import type { QuestionResponse } from '@/shared/api/types';
import ArrowLeft from '@/shared/assets/icons/ic_arrow_left.svg?react';
import ArrowRight from '@/shared/assets/icons/ic_arrow_right.svg?react';
import TextFieldWithCounter from '@/shared/components/textfield-with-counter/textfield-with-counter';

import TableQuestion from './table-question';

import * as styles from './visualization-question-section.css';

interface VisualizationQuestionSectionProps {
  questions: QuestionResponse[];
  answers: Record<string, string>;
  onAnswerChange: (questionId: string, value: string) => void;
  onPrev: () => void;
  onNext: () => void;
}

const VisualizationQuestionSection = ({
  questions,
  answers,
  onAnswerChange,
  onPrev,
  onNext,
}: VisualizationQuestionSectionProps) => {
  const [additionalProjectCount, setAdditionalProjectCount] = useState(0);

  const sorted = [...questions].sort((a, b) => (a.order_num ?? 0) - (b.order_num ?? 0));
  const tableQuestions = sorted.filter((q) => q.type === 'TABLE');
  const textQuestions = sorted.filter((q) => q.type !== 'TABLE');
  const projectQuestion = textQuestions.at(-1);
  const regularTextQuestions = textQuestions.slice(0, -1);

  return (
    <div className={styles.container}>
      {tableQuestions.map((question) => (
        <section key={question.question_id} className={styles.section}>
          <TableQuestion
            question={question}
            answer={answers[String(question.question_id)] ?? ''}
            onChange={onAnswerChange}
          />
        </section>
      ))}

      {regularTextQuestions.map((question) => {
        const qid = String(question.question_id);
        return (
          <section key={qid} className={styles.section}>
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
              value={answers[qid] ?? ''}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                onAnswerChange(qid, e.target.value)
              }
            />
          </section>
        );
      })}

      {projectQuestion &&
        (() => {
          const qid = String(projectQuestion.question_id);
          return (
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
                value={answers[qid] ?? ''}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                  onAnswerChange(qid, e.target.value)
                }
              />
              {Array.from({ length: additionalProjectCount }, (_, i) => (
                <TextFieldWithCounter
                  key={i}
                  maxLength={projectQuestion.limit_length ?? 500}
                  value={answers[`${qid}__extra_${i}`] ?? ''}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                    onAnswerChange(`${qid}__extra_${i}`, e.target.value)
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
          );
        })()}

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

export default VisualizationQuestionSection;
