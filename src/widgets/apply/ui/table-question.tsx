import type { QuestionResponse } from '@/shared/api/types';
import RadioGroup from '@/shared/components/radio-button/radio-group';

import * as styles from './table-question.css';

type TableMetadata = { rows: string[]; columns: string[] };

interface TableQuestionProps {
  question: QuestionResponse;
  answer: string;
  onChange: (questionId: string, value: string) => void;
  radioClassName?: string;
  stackClassName?: string;
}

const TableQuestion = ({
  question,
  answer,
  onChange,
  radioClassName,
  stackClassName,
}: TableQuestionProps) => {
  const metadata = question.metadata as unknown as TableMetadata;
  const questionId = String(question.question_id);
  const tableData = answer ? (JSON.parse(answer) as Record<string, string>) : {};

  const columnOptions = metadata.columns.map((col) => ({ label: col, value: col }));

  const handleRowChange = (row: string, value: string | null) => {
    const updated = { ...tableData };
    if (value === null) {
      delete updated[row];
    } else {
      updated[row] = value;
    }
    onChange(questionId, JSON.stringify(updated));
  };

  return (
    <>
      {metadata.rows.map((row, i) => (
        <section key={row} className={styles.row}>
          <div className={stackClassName}>{row}</div>
          <RadioGroup
            name={`${questionId}_row_${i}`}
            options={columnOptions}
            value={tableData[row] ?? null}
            className={radioClassName}
            onChange={(value) => handleRowChange(row, value)}
          />
        </section>
      ))}
    </>
  );
};

export default TableQuestion;
