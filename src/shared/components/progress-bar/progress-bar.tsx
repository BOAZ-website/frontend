import * as styles from './progress-bar.css';

interface ProgressBarProps {
  isCurrentStep?: boolean;
  onClick?: () => void;
}

const ProgressBar = ({ isCurrentStep = false, onClick }: ProgressBarProps) => {
  return (
    <button className={styles.progressBar({ isCurrentStep })} onClick={onClick} type="button" />
  );
};

export default ProgressBar;
