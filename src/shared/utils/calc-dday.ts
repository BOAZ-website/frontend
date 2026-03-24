const MS_PER_DAY = 1000 * 60 * 60 * 24;

const toStartOfDay = (date: Date): number =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();

export const calcDDay = (startDate: string): number => {
  const target = new Date(startDate);
  const today = new Date();
  const diff = toStartOfDay(target) - toStartOfDay(today);
  return Math.ceil(diff / MS_PER_DAY);
};
