import { useState } from 'react';

import type { QuestionResponse } from '@/shared/api/types';
import ArrowLeft from '@/shared/assets/icons/ic_arrow_left.svg?react';
import ArrowRight from '@/shared/assets/icons/ic_arrow_right.svg?react';
import TextFieldWithCounter from '@/shared/components/textfield-with-counter/textfield-with-counter';

import * as styles from '@/widgets/apply/ui/analysis-question-section.css';

interface AnalysisQuestionSectionProps {
  questions: QuestionResponse[];
  answers: Record<string, string>;
  onAnswerChange: (questionId: string, value: string) => void;
  onPrev: () => void;
  onNext: () => void;
  nextLabel?: string;
}

const ADDABLE_LABEL = '프로젝트';

const AnalysisQuestionSection = ({
  questions,
  answers,
  onAnswerChange,
  onPrev,
  onNext,
  nextLabel = '다음 페이지',
}: AnalysisQuestionSectionProps) => {
  const [extraCounts, setExtraCounts] = useState<Record<string, number>>({});
  const [showError, setShowError] = useState(false);

  const handleNext = () => {
    const hasEmpty = questions
      .filter((q) => q.is_required)
      .some((q) => !answers[String(q.question_id)]?.trim());
    if (hasEmpty) {
      setShowError(true);
      return;
    }
    setShowError(false);
    onNext();
  };

  const sortedQuestions = questions.slice().sort((a, b) => (a.order_num ?? 0) - (b.order_num ?? 0));

  return (
    <div className={styles.container}>
      {sortedQuestions.map((question) => {
        const qId = String(question.question_id);
        const isAddable = question.label?.includes(ADDABLE_LABEL) ?? false;
        const extraCount = extraCounts[qId] ?? 0;

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

      {showError && <p className={styles.errorText}>필수 질문에 모두 답변해 주세요.</p>}

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

export default AnalysisQuestionSection;
