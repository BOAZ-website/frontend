import type { QuestionResponse } from '@/shared/api/types';
import RadioButton from '@/shared/components/radio-button/radio-button';
import RadioGroup from '@/shared/components/radio-button/radio-group';

import * as styles from './table-question.css';

type TableMetadata = { rows: string[]; columns: string[]; multiple?: boolean };

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

  const columnOptions = metadata.columns.map((col) => ({ label: col, value: col }));

  if (metadata.multiple) {
    const multiData: Record<string, string[]> = answer
      ? (JSON.parse(answer) as Record<string, string[]>)
      : {};

    const handleMultiRowChange = (row: string, col: string) => {
      const current = multiData[row] ?? [];
      const updated = current.includes(col) ? current.filter((v) => v !== col) : [...current, col];
      onChange(questionId, JSON.stringify({ ...multiData, [row]: updated }));
    };

    const colCount = metadata.columns.length;
    const gridTemplateColumns = `auto repeat(${colCount}, 1fr)`;

    return (
      <div className={styles.multiGrid} style={{ gridTemplateColumns }}>
        {/* 헤더 행 */}
        <div />
        {metadata.columns.map((col) => (
          <div key={col} className={styles.multiHeaderCell}>
            {col}
          </div>
        ))}

        {/* 데이터 행 */}
        {metadata.rows.map((row) => (
          <>
            <div key={`label-${row}`} className={styles.multiRowLabel}>
              {row}
            </div>
            {metadata.columns.map((col) => (
              <div key={`${row}-${col}`} className={styles.multiCell}>
                <RadioButton
                  type="checkbox"
                  name={`${questionId}_${row}_${col}`}
                  label=""
                  value={col}
                  checked={(multiData[row] ?? []).includes(col)}
                  onChange={() => handleMultiRowChange(row, col)}
                />
              </div>
            ))}
          </>
        ))}
      </div>
    );
  }

  const tableData: Record<string, string> = answer
    ? (JSON.parse(answer) as Record<string, string>)
    : {};

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
