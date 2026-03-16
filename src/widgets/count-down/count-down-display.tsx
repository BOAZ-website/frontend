import { Fragment, useEffect, useMemo, useRef, useState } from 'react';

import { useCountdown } from '@/shared/hooks/use-count-down';

import * as styles from './count-down.css';

const UNITS = [
  { key: 'days', label: 'DAY', suffix: '일' },
  { key: 'hours', label: 'HOUR', suffix: '시간' },
  { key: 'minutes', label: 'MINUTE', suffix: '분' },
  { key: 'seconds', label: 'SECOND', suffix: '초' },
] as const;

type UnitKey = (typeof UNITS)[number]['key'];

interface Props {
  deadline: string;
}

export function CountdownDisplay({ deadline }: Props) {
  const targetDate = useMemo(() => new Date(deadline), [deadline]);
  const timeLeft = useCountdown(targetDate);

  const [changedKeys, setChangedKeys] = useState<Set<UnitKey>>(new Set());
  const prevRef = useRef<Partial<Record<UnitKey, number>>>({});

  useEffect(() => {
    const next = new Set<UnitKey>();

    UNITS.forEach(({ key }) => {
      if (prevRef.current[key] !== timeLeft[key]) {
        next.add(key);
        prevRef.current[key] = timeLeft[key];
      }
    });

    if (next.size > 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setChangedKeys(next);
    }
  }, [timeLeft]);

  return (
    <div className={styles.root} role="timer" aria-label="모집 마감까지 남은 시간">
      {UNITS.map((unit, i) => {
        const current = timeLeft[unit.key];

        return (
          <Fragment key={unit.key}>
            <div className={styles.unit}>
              <span className={styles.label}>{unit.label}</span>
              <span
                key={`${unit.key}-${current}`}
                className={changedKeys.has(unit.key) ? styles.valueTick : styles.value}
              >
                {current}
                {unit.suffix}
              </span>
            </div>
            {i < UNITS.length - 1 && <span className={styles.separator}>:</span>}
          </Fragment>
        );
      })}
    </div>
  );
}
