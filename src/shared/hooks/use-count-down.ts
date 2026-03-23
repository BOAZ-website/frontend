import { useEffect, useRef, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calcTimeLeft = (endTime: number): TimeLeft => {
  const diff = endTime - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

export const useCountdown = (deadline: string) => {
  const endTimeRef = useRef<number>(new Date(deadline).getTime());

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    calcTimeLeft(new Date(deadline).getTime())
  );

  useEffect(() => {
    endTimeRef.current = new Date(deadline).getTime();

    const timer = setInterval(() => {
      const remaining = calcTimeLeft(endTimeRef.current);
      setTimeLeft(remaining);

      if (endTimeRef.current - Date.now() <= 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [deadline]);

  return timeLeft;
};
