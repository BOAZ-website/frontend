export const formatRecruitDate = (startDate: string, endDate: string): string => {
  const formatWithYear = (iso: string) => {
    const date = new Date(iso);
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return `${yyyy}.${mm}.${dd}`;
  };

  const formatWithoutYear = (iso: string) => {
    const date = new Date(iso);
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return `${mm}.${dd}`;
  };

  return `${formatWithYear(startDate)} - ${formatWithoutYear(endDate)}`;
};
