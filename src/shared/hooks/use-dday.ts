const calcDDay = (startDate: string): number => {
  const diff = new Date(startDate).getTime() - Date.now();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
};

export const useDDay = (startDate: string): number => {
  return calcDDay(startDate);
};
