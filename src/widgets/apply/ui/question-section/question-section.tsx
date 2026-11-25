import { useState } from 'react';

import type { QuestionResponse, Track } from '@/shared/api/types';
import ArrowLeft from '@/shared/assets/icons/ic_arrow_left.svg?react';
import ArrowRight from '@/shared/assets/icons/ic_arrow_right.svg?react';
import Button from '@/shared/components/button/button';
import TextFieldWithCounter from '@/shared/components/textfield-with-counter/textfield-with-counter';
import { getTrackFullLabel } from '@/shared/utils/track-label';

import TableQuestion from '../table-question';
import DescriptionText from './description-text';

import * as styles from './question-section.css';

const ADDABLE_LABEL = '프로젝트';
/**
 * 제목 안의 글자 수 표기. 기존 "(공백 포함 N자 이내)"에 더해 "(N자 이내)", "(N자 이하)"도 지운다.
 * "이내"·"이하"가 있어야 하므로 "(끝 4자리)", "(500자)" 같은 괄호는 남긴다.
 */
const LIMIT_IN_TITLE = /\s*\(\s*(?:공백\s*포함\s*)?\d+\s*자\s*(?:이내|이하)\s*\)/g;

/**
 * 제목의 글자 수 표기를 지우고 limit_length로 만든 안내를 제목 끝에 붙인다.
 * 실제 입력 제한과 카운터는 limit_length를 따르므로, 화면의 숫자도 항상 그 값과 같게 한다.
 */
const splitLimit = (
  content: string,
  limitLength: number | undefined
): { title: string; limitText?: string } =>
  limitLength
    ? {
        title: content.replace(LIMIT_IN_TITLE, '').trim(),
        limitText: `공백 포함 ${limitLength}자 이내`,
      }
    : { title: content };

/** 문항 설명. 문자열 `\n`도 줄바꿈으로 바꾸고, 비어 있으면 그리지 않도록 undefined를 돌려준다(면접 문항과 같은 방식). */
const descriptionOf = (question: QuestionResponse): string | undefined =>
  question.description?.replace(/\\n/g, '\n').trim() || undefined;

interface QuestionSectionProps {
  questions: QuestionResponse[];
  answers: Record<string, string>;
  onAnswerChange: (questionId: string, value: string) => void;
  onPrev: () => void;
  onNext: () => void;
  nextLabel?: string;
  supportsTable?: boolean;
  track?: Track;
  /** 지원 중인 모집 공고의 기수. 문항의 `{부문}`을 이 기수의 부문 이름으로 바꾼다. */
  term?: number;
}

const isTableAnswerComplete = (
  question: QuestionResponse,
  answers: Record<string, string>
): boolean => {
  const metadata = question.metadata as unknown as { rows: string[]; multiple?: boolean };
  if (!metadata?.rows) {
    return false;
  }
  const tableData = answers[String(question.question_id)];
  if (!tableData) {
    return false;
  }
  try {
    if (metadata.multiple) {
      const parsed = JSON.parse(tableData) as Record<string, string[]>;
      return Object.values(parsed).some((arr) => arr.length > 0);
    }
    const parsed = JSON.parse(tableData) as Record<string, string>;
    return metadata.rows.every((row) => !!parsed[row]);
  } catch {
    return false;
  }
};

const QuestionSection = ({
  questions,
  answers,
  onAnswerChange,
  onPrev,
  onNext,
  nextLabel = '다음 페이지',
  supportsTable = false,
  track,
  term,
}: QuestionSectionProps) => {
  const resolveContent = (content: string | undefined) => {
    const withTrack = track
      ? (content ?? '').replace(/\{부문\}/g, getTrackFullLabel(track, term))
      : (content ?? '');
    return withTrack.trim();
  };
  const [extraCounts, setExtraCounts] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const isQuestionComplete = (q: QuestionResponse): boolean => {
    if (!q.is_required) {
      return true;
    }
    if (supportsTable && q.type === 'TABLE') {
      return isTableAnswerComplete(q, answers);
    }
    return !!answers[String(q.question_id)]?.trim();
  };

  const handleNext = () => {
    setSubmitted(true);

    const hasOverLimit = questions
      .filter((q) => !(supportsTable && q.type === 'TABLE'))
      .some((q) => (answers[String(q.question_id)]?.length ?? 0) > (q.limit_length ?? 500));

    const hasEmpty = questions.some((q) => !isQuestionComplete(q));

    if (hasEmpty || hasOverLimit) {
      return;
    }
    onNext();
  };

  const isComplete = questions.every(isQuestionComplete);
  const isSubmitMode = nextLabel === '제출하기';

  const sortedQuestions = questions.slice().sort((a, b) => (a.order_num ?? 0) - (b.order_num ?? 0));

  return (
    <div className={styles.container}>
      {sortedQuestions.map((question) => {
        const qId = String(question.question_id);

        if (supportsTable && question.type === 'TABLE') {
          const tableIncomplete = submitted && !isTableAnswerComplete(question, answers);
          const isMultiple = !!(question.metadata as unknown as { multiple?: boolean })?.multiple;
          const tableDescription = descriptionOf(question);
          return (
            <div key={qId} className={styles.tableSection}>
              <div className={styles.titleContainer}>
                <div className={styles.sectionExperienceTitle}>
                  {resolveContent(question.content)}
                </div>
                {tableDescription && (
                  <DescriptionText text={tableDescription} className={styles.questionDescription} />
                )}
              </div>
              <TableQuestion
                question={question}
                answer={answers[qId] ?? ''}
                onChange={onAnswerChange}
                radioClassName={styles.radioButton}
                stackClassName={styles.stackQuestion}
              />
              {tableIncomplete && (
                <p className={styles.errorText}>
                  {isMultiple ? '최소 하나의 시간을 선택해 주세요.' : '모든 항목을 선택해 주세요.'}
                </p>
              )}
            </div>
          );
        }

        const isAddable = question.label?.includes(ADDABLE_LABEL) ?? false;
        const extraCount = extraCounts[qId] ?? 0;
        const isEmpty = submitted && !!question.is_required && !answers[qId]?.trim();

        const description = descriptionOf(question);
        const { title, limitText } = splitLimit(
          resolveContent(question.content),
          question.limit_length
        );

        return (
          <section key={qId} className={styles.section}>
            <div className={styles.titleContainer}>
              <h2 className={styles.sectionTitle}>
                {title}
                {limitText && ` (${limitText})`}
              </h2>
              {description && (
                <DescriptionText text={description} className={styles.questionDescription} />
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

      <div className={isSubmitMode ? styles.footerSubmit : styles.footerNav}>
        {isSubmitMode ? (
          <>
            <Button preset="wide_primary" onClick={handleNext} disabled={!isComplete}>
              {nextLabel}
            </Button>
            <div className={styles.navButton} onClick={onPrev}>
              <ArrowLeft /> 이전 페이지
            </div>
          </>
        ) : (
          <>
            <div className={styles.navButton} onClick={onPrev}>
              <ArrowLeft /> 이전 페이지
            </div>
            <div className={styles.navButton} onClick={handleNext}>
              {nextLabel} <ArrowRight />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default QuestionSection;
