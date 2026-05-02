import type { QuestionResponse } from '@/shared/api/types';
import RadioGroup from '@/shared/components/radio-button/radio-group';

import * as styles from './table-question.css';

type TableMetadata = {
  rows: string[];
  columns: string[];
};

interface TableQuestionProps {
  question: QuestionResponse;
  answer: string;
  onChange: (questionId: string, value: string) => void;
}

const TableQuestion = ({ question, answer, onChange }: TableQuestionProps) => {
  const metadata = question.metadata as unknown as TableMetadata;
  if (!metadata?.rows || !metadata?.columns) {
    return null;
  }

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
    <div className={styles.container}>
      {question.content && <div className={styles.sectionTitle}>{question.content}</div>}
      {metadata.rows.map((row) => (
        <div key={row} className={styles.row}>
          <div className={styles.rowLabel}>{row}</div>
          <RadioGroup
            name={`${questionId}-${row}`}
            options={columnOptions}
            value={tableData[row] ?? null}
            onChange={(value) => handleRowChange(row, value)}
            className={styles.radioGroup}
          />
        </div>
      ))}
    </div>
  );
};

export default TableQuestion;
