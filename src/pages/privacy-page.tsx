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

const labelOf = (version: PolicyVersion): string => version.effectiveDate.replaceAll('-', '. ');

const PrivacyPage = () => {
  // 처음에는 가장 최신 버전을 보여 준다. 새 버전은 시행일에 맞춰 배포한다.
  const [selectedDate, setSelectedDate] = useState(POLICY_VERSIONS[0].effectiveDate);
  const selected =
    POLICY_VERSIONS.find((version) => version.effectiveDate === selectedDate) ?? POLICY_VERSIONS[0];

  return (
    <main className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>{selected.title}</h1>
          <VersionSelect
            options={POLICY_VERSIONS.map((version) => ({
              value: version.effectiveDate,
              label: labelOf(version),
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
