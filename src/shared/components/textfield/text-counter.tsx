import * as styles from './text-counter.css';

interface TextCounterProps {
  currentLength: number;
  maxLength: number;
  isError?: boolean;
  isCompleted?: boolean;
}

const TextCounter = ({
  currentLength,
  maxLength,
  isError = false,
  isCompleted = false,
}: TextCounterProps) => {
  return (
    <span className={styles.textCounterRecipe({ error: isError, completed: isCompleted })}>
      {currentLength}/{maxLength}
    </span>
  );
};

export default TextCounter;
