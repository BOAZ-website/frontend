import { useState } from 'react';

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
  nextLabel?: string;
}

const ADDABLE_LABEL = '프로젝트';

const VisualizationQuestionSection = ({
  questions,
  answers,
  onAnswerChange,
  onPrev,
  onNext,
  nextLabel = '다음 페이지',
}: VisualizationQuestionSectionProps) => {
  const [extraCounts, setExtraCounts] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const isTableAnswerComplete = (question: QuestionResponse): boolean => {
    const metadata = question.metadata as unknown as { rows: string[] };
    if (!metadata?.rows) {
      return false;
    }
    const tableData = answers[String(question.question_id)];
    if (!tableData) {
      return false;
    }
    try {
      const parsed = JSON.parse(tableData) as Record<string, string>;
      return metadata.rows.every((row) => !!parsed[row]);
    } catch {
      return false;
    }
  };

  const handleNext = () => {
    setSubmitted(true);

    const hasOverLimit = questions
      .filter((q) => q.type !== 'TABLE')
      .some((q) => (answers[String(q.question_id)]?.length ?? 0) > (q.limit_length ?? 500));

    const hasEmpty = questions.some((q) =>
      q.type === 'TABLE' ? !isTableAnswerComplete(q) : !answers[String(q.question_id)]?.trim()
    );

    if (hasEmpty || hasOverLimit) {
      return;
    }
    onNext();
  };

  const sortedQuestions = questions.slice().sort((a, b) => (a.order_num ?? 0) - (b.order_num ?? 0));

  return (
    <div className={styles.container}>
      {sortedQuestions.map((question) => {
        const qId = String(question.question_id);

        if (question.type === 'TABLE') {
          const tableIncomplete = submitted && !isTableAnswerComplete(question);
          return (
            <div key={qId} style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
              <div className={styles.sectionExperienceTitle}>{question.content}</div>
              <TableQuestion
                question={question}
                answer={answers[qId] ?? ''}
                onChange={onAnswerChange}
                radioClassName={styles.radioButton}
                stackClassName={styles.stackQuestion}
              />
              {tableIncomplete && <p className={styles.errorText}>모든 항목을 선택해 주세요.</p>}
            </div>
          );
        }

        const isAddable = question.label?.includes(ADDABLE_LABEL) ?? false;
        const extraCount = extraCounts[qId] ?? 0;
        const isEmpty = submitted && !answers[qId]?.trim();

        return (
          <section key={qId} className={styles.section}>
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
              value={answers[qId] ?? ''}
              onChange={(e) => onAnswerChange(qId, e.target.value)}
              errorMessage={isEmpty ? '필수 입력 항목입니다.' : undefined}
            />
            {Array.from({ length: extraCount }).map((_, i) => {
              const extraKey = `${qId}__extra_${i}`;
              return (
                <TextFieldWithCounter
                  key={extraKey}
                  maxLength={question.limit_length ?? 500}
                  value={answers[extraKey] ?? ''}
                  onChange={(e) => onAnswerChange(extraKey, e.target.value)}
                />
              );
            })}
            {isAddable && (
              <div
                className={styles.addProject}
                onClick={() => setExtraCounts((prev) => ({ ...prev, [qId]: (prev[qId] ?? 0) + 1 }))}
              >
                + 프로젝트 추가하기
              </div>
            )}
          </section>
        );
      })}

      <div className={styles.footer}>
        <div className={styles.navButton} onClick={onPrev}>
          <ArrowLeft /> 이전 페이지
        </div>
        <div className={styles.navButton} onClick={handleNext}>
          {nextLabel} <ArrowRight />
        </div>
      </div>
    </div>
  );
};

export default VisualizationQuestionSection;
