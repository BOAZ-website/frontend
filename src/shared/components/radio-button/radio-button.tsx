import * as styles from './radio-button.css';

interface RadioButtonProps {
  label: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
}

const RadioButton = ({ label, name, value, checked, onChange }: RadioButtonProps) => {
  return (
    <label className={styles.container}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        className={styles.hiddenInput}
      />
      <div className={styles.radioCircle}>
        <div className={styles.innerDot} />
      </div>
      <span className={styles.labelText}>{label}</span>
    </label>
  );
};

export default RadioButton;
