import { useDDay } from '@/shared/hooks/use-dday';

import * as styles from './dday-counter.css';

interface DDayCounterProps {
  startDate: string;
}

const DDayCounter = ({ startDate }: DDayCounterProps) => {
  const dDay = useDDay(startDate);

  return <span className={styles.dDay}>D-{dDay}</span>;
};

export default DDayCounter;
