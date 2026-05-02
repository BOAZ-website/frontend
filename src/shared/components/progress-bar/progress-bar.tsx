import * as styles from './progress-bar.css';

interface ProgressBarProps {
  isCurrentStep?: boolean;
}

const ProgressBar = ({ isCurrentStep = false }: ProgressBarProps) => {
  return <button className={styles.progressBar({ isCurrentStep })} type="button" />;
};

export default ProgressBar;
