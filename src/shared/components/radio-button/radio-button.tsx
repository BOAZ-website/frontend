import * as styles from './radio-button.css';

interface RadioButtonProps {
  label: string;
  value: string;
  name: string;
  checked: boolean;
  onChange: (value: string) => void;
}

const RadioButton = ({ label, value, name, checked, onChange }: RadioButtonProps) => {
  return (
    <label className={styles.container}>
      <input
        type="radio"
        name={name}
        checked={checked}
        onChange={() => onChange(value)}
        className={styles.hiddenInput}
      />
      <div className={styles.radioCircle} />
      <span className={styles.labelText}>{label}</span>
    </label>
  );
};

export default RadioButton;
