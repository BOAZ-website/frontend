import * as styles from './text-counter.css';

interface TextCounterProps {
  currentLength: number;
  maxLength: number;
}

const TextCounter = ({ currentLength, maxLength }: TextCounterProps) => {
  return (
    <span className={styles.textCounterRecipe()}>
      {currentLength}/{maxLength}
    </span>
  );
};

export default TextCounter;
