import { useCountdown } from '@/shared/hooks/use-count-down';
import { pad } from '@/shared/utils/time-formatter';

import * as styles from './count-down-timer.css';

interface CountdownTimerProps {
  deadline: string;
}

const CountdownTimer = ({ deadline }: CountdownTimerProps) => {
  const { days, hours, minutes, seconds } = useCountdown(deadline);

  return (
    <div className={styles.container}>
      <div className={styles.unit}>
        <span className={styles.label}>DAY</span>
        <span className={styles.value}>{pad(days)}</span>
      </div>
      <span className={styles.separator}>:</span>
      <div className={styles.unit}>
        <span className={styles.label}>HOUR</span>
        <span className={styles.value}>{pad(hours)}</span>
      </div>
      <span className={styles.separator}>:</span>
      <div className={styles.unit}>
        <span className={styles.label}>MINUTE</span>
        <span className={styles.value}>{pad(minutes)}</span>
      </div>
      <span className={styles.separator}>:</span>
      <div className={styles.unit}>
        <span className={styles.label}>SECOND</span>
        <span className={styles.value}>{pad(seconds)}</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
