import * as styles from './radio-button.css';

interface RadioButtonProps {
  label: string;
  value: string;
}

const RadioButton = ({ label, value }: RadioButtonProps) => {
  return (
    <label className={styles.container}>
      <input type="radio" value={value} className={styles.hiddenInput} />
      <div className={styles.radioCircle} />
      <span className={styles.labelText}>{label}</span>
    </label>
  );
};

export default RadioButton;
