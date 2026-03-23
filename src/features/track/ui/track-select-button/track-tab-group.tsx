import { useState } from 'react';

import { TRACK_TABS, type TrackTab } from '@/features/track/constant/track-tabs';
import FixedButton from '@/shared/components/fixed-tab/fixed-tab';

import * as styles from './track-tab-group.css';
interface TrackTabGroupProps {
  defaultTab?: TrackTab;
  onTabChange?: (tab: TrackTab) => void;
}

const TrackTabGroup = ({ defaultTab = '분석', onTabChange }: TrackTabGroupProps) => {
  const [activeTab, setActiveTab] = useState<TrackTab>(defaultTab);

  const handleTabClick = (tab: TrackTab) => {
    setActiveTab(tab);
    onTabChange?.(tab);
  };

  return (
    <div className={styles.container}>
      {TRACK_TABS.map((tab) => (
        <FixedButton key={tab} isActive={activeTab === tab} onClick={() => handleTabClick(tab)}>
          {tab}
        </FixedButton>
      ))}
    </div>
  );
};

export default TrackTabGroup;
