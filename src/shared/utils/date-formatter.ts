const DAYS_KO = ['일', '월', '화', '수', '목', '금', '토'] as const;

export const formatKoreanDate = (iso: string): string => {
  const match = iso.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!match) {
    return '';
  }
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);

  const date = new Date(Date.UTC(year, month - 1, day));
  if (
    date.getUTCFullYear() !== year ||
    date.getUTCMonth() !== month - 1 ||
    date.getUTCDate() !== day
  ) {
    return '';
  }

  return `${year}년 ${month}월 ${day}일 (${DAYS_KO[date.getUTCDay()]})`;
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
