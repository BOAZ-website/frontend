import { useEffect, useState } from 'react';

interface TimeLeftProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calcTimeLeft(targetDate: Date): TimeLeftProps {
  const diff = Math.max(targetDate.getTime() - Date.now(), 0);
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function useCountdown(targetDate: Date): TimeLeftProps {
  const [timeLeft, setTimeLeft] = useState<TimeLeftProps>(() => calcTimeLeft(targetDate));

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(calcTimeLeft(targetDate)), 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return timeLeft;
}
