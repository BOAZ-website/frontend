const DAYS_KO = ['일', '월', '화', '수', '목', '금', '토'] as const;

export const formatKoreanDate = (iso: string): string => {
  const match = iso.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!match) {
    return '';
  }
  const date = new Date(iso);
  return `${match[1]}년 ${parseInt(match[2])}월 ${parseInt(match[3])}일 (${DAYS_KO[date.getDay()]})`;
};

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
