export interface RecruitmentStep {
  id: string;
  date: string;
  stepLabel: string;
}

export interface ScheduleStep {
  step: string;
  start: string;
  end?: string;
  sequence: number;
}

const parseMMDD = (iso: string): string => {
  const match = iso.match(/^(\d{4})-(\d{2})-(\d{2})/);
  return match ? `${match[2]}.${match[3]}` : '';
};

const formatScheduleDate = (start: string, end?: string): string => {
  const s = parseMMDD(start);
  if (!end) {
    return s;
  }
  const e = parseMMDD(end);
  return s === e ? s : `${s} ~ ${e}`;
};

export const toRecruitmentSteps = (raw: ScheduleStep[]): RecruitmentStep[] =>
  [...raw]
    .sort((a, b) => a.sequence - b.sequence)
    .map((s) => ({
      id: String(s.sequence),
      date: formatScheduleDate(s.start, s.end),
      stepLabel: s.step,
    }));
