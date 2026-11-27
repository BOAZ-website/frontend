import * as styles from './radio-button.css';

interface RadioButtonProps {
  label: string;
  value: string;
  name: string;
  checked: boolean;
  onChange: (value: string) => void;
  type?: 'radio' | 'checkbox';
  /** 화면에 보이는 label이 없을 때(표 안 체크박스 등) 화면 낭독기가 읽을 이름 */
  ariaLabel?: string;
}

const RadioButton = ({
  label,
  value,
  name,
  checked,
  onChange,
  type = 'radio',
  ariaLabel,
}: RadioButtonProps) => {
  return (
    <label className={styles.container}>
      <input
        type={type}
        name={name}
        checked={checked}
        onChange={() => onChange(value)}
        className={styles.hiddenInput}
        aria-label={ariaLabel}
      />
      <div className={styles.radioCircle} />
      <span className={styles.labelText}>{label}</span>
    </label>
  );
};

export default RadioButton;
