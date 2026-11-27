import { type ComponentType, useState } from 'react';

import PrivacyPolicy20260601 from './privacy/policy-2026-06-01';
import PrivacyPolicy20261130 from './privacy/policy-2026-11-30';
import VersionSelect from './privacy/version-select';

import * as styles from './privacy-page.css';

interface PolicyVersion {
  /** 시행일 (YYYY-MM-DD) */
  effectiveDate: string;
  /** 그 시행본 문서의 제목 */
  title: string;
  Content: ComponentType;
}

/** 시행일 최신순. 새 버전은 맨 앞에 추가한다. 지난 버전도 계속 볼 수 있어야 하므로 지우지 않는다. */
const POLICY_VERSIONS: PolicyVersion[] = [
  { effectiveDate: '2026-11-30', title: 'BOAZ 개인정보 처리방침', Content: PrivacyPolicy20261130 },
  { effectiveDate: '2026-06-01', title: '개인정보처리방침', Content: PrivacyPolicy20260601 },
];

/** 한국 시간 기준 오늘 날짜(YYYY-MM-DD). 시행일과 문자열로 비교한다. */
const todayInSeoul = (): string => new Date().toLocaleDateString('sv', { timeZone: 'Asia/Seoul' });

const isUpcoming = (version: PolicyVersion, today: string): boolean =>
  version.effectiveDate > today;

const labelOf = (version: PolicyVersion, today: string): string =>
  `${version.effectiveDate.replaceAll('-', '. ')}${isUpcoming(version, today) ? ' (시행 예정)' : ''}`;

/** 이미 시행된 버전 중 가장 최신. 시행일이 되면 다시 배포하지 않아도 새 버전이 기본이 된다. */
const currentVersionOf = (today: string): PolicyVersion =>
  POLICY_VERSIONS.find((version) => !isUpcoming(version, today)) ?? POLICY_VERSIONS.at(-1)!;

const PrivacyPage = () => {
  const today = todayInSeoul();
  const [selectedDate, setSelectedDate] = useState(() => currentVersionOf(today).effectiveDate);
  const selected =
    POLICY_VERSIONS.find((version) => version.effectiveDate === selectedDate) ??
    currentVersionOf(today);

  return (
    <main className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>{selected.title}</h1>
          <VersionSelect
            options={POLICY_VERSIONS.map((version) => ({
              value: version.effectiveDate,
              label: labelOf(version, today),
            }))}
            value={selected.effectiveDate}
            onChange={setSelectedDate}
          />
        </div>

        <selected.Content />
      </div>
    </main>
  );
};

export default PrivacyPage;
