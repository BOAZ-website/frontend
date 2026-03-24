export const formatRecruitDate = (startDate: string, endDate: string): string => {
  const parseDate = (iso: string): [string, string, string] => {
    const match = iso.match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (!match) {
      throw new Error(`Invalid date format: ${iso}`);
    }
    return [match[1], match[2], match[3]];
  };

  const [yyyy, startMm, startDd] = parseDate(startDate);
  const [, endMm, endDd] = parseDate(endDate);

  return `${yyyy}.${startMm}.${startDd} - ${endMm}.${endDd}`;
};
