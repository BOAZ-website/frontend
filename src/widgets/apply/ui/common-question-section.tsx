import { useState } from 'react';

import type { QuestionResponse } from '@/shared/api/types';
import ArrowLeft from '@/shared/assets/icons/ic_arrow_left.svg?react';
import ArrowRight from '@/shared/assets/icons/ic_arrow_right.svg?react';
import TextFieldWithCounter from '@/shared/components/textfield-with-counter/textfield-with-counter';

import * as styles from './common-question-section.css';

interface CommonQuestionSectionProps {
  questions: QuestionResponse[];
  answers: Record<string, string>;
  onAnswerChange: (questionId: string, value: string) => void;
  onPrev: () => void;
  onNext: () => void;
}

const CommonQuestionSection = ({
  questions,
  answers,
  onAnswerChange,
  onPrev,
  onNext,
}: CommonQuestionSectionProps) => {
  const [submitted, setSubmitted] = useState(false);

  const handleNext = () => {
    setSubmitted(true);
    const hasEmpty = questions.some((q) => !answers[String(q.question_id)]?.trim());
    if (hasEmpty) {
      return;
    }
    onNext();
  };

  return (
    <div className={styles.container}>
      {questions
        .slice()
        .sort((a, b) => (a.order_num ?? 0) - (b.order_num ?? 0))
        .map((question) => {
          const qId = String(question.question_id);
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
            </section>
          );
        })}

      <div className={styles.footer}>
        <div className={styles.navButton} onClick={onPrev}>
          <ArrowLeft /> 이전 페이지
        </div>
        <div className={styles.navButton} onClick={handleNext}>
          다음 페이지 <ArrowRight />
        </div>
      </div>
    </div>
  );
};

export default CommonQuestionSection;
