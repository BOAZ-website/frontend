import { calcDDay } from '@/shared/utils/calc-dday';

import * as styles from './dday-counter.css';

interface DDayCounterProps {
  startDate: string;
}

const DDayCounter = ({ startDate }: DDayCounterProps) => {
  const dDay = calcDDay(startDate);

  return <span className={styles.dDay}>D-{dDay}</span>;
};

export default DDayCounter;
