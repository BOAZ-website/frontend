import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { CURRICULUM_QUERY_OPTIONS } from '@/widgets/curriculum/model/curriculum/query-options';
import { REVIEW_QUERY_OPTIONS } from '@/widgets/curriculum/model/review/query-options';
import BannerSlider from '@/widgets/curriculum/ui/banner-slider/banner-slider';
import ConferenceSection from '@/widgets/curriculum/ui/conference-section/conference-section';
import CurriculumSection from '@/widgets/curriculum/ui/curriculum-section/curriculum-section';
import ReviewSection from '@/widgets/curriculum/ui/review-section/review-section';
import type { TrackTab } from '@/features/track/constant/track-tabs';
import TrackTabGroup from '@/features/track/ui/track-select-button/track-tab-group';
import TrackIcon from '@/shared/assets/icons/ic_track_character.svg?react';

import * as styles from './curriculum-page.css';

const TRACK_TAB_TO_API = {
  분석: 'ANALYSIS',
  시각화: 'VISUALIZATION',
  엔지니어링: 'ENGINEERING',
} as const satisfies Record<TrackTab, 'ANALYSIS' | 'VISUALIZATION' | 'ENGINEERING'>;

const CurriculumPage = () => {
  const [activeTab, setActiveTab] = useState<TrackTab>('분석');
  const [reviewPage, setReviewPage] = useState(1);

  const apiTrack = TRACK_TAB_TO_API[activeTab];

  const { data: curriculums = [] } = useQuery(CURRICULUM_QUERY_OPTIONS.LIST(apiTrack));

  const { data: reviews = [] } = useQuery(REVIEW_QUERY_OPTIONS.LIST());

  const currentCurriculum = curriculums.find((c) => c.track === apiTrack);
  const steps = currentCurriculum?.curriculum_steps ?? [];

  const handleTabChange = (tab: TrackTab) => {
    setActiveTab(tab);
  };

  return (
    <main className={styles.page}>
      <BannerSlider />

      {/* 트랙 탭 */}
      <div className={styles.tabRow}>
        <TrackTabGroup defaultTab={activeTab} onTabChange={handleTabChange} />
      </div>

      <div className={styles.section}>
        <div className={styles.quoteBox}>
          <p className={styles.quoteText}>{'"데이터 속에 숨겨진 논리와 해답을 찾습니다."'}</p>
          <p className={styles.quoteDesc}>
            {`통계적 지식과 머신러닝 알고리즘을 바탕으로 데이터의 패턴을 찾아냅니다.\n단순한 수치 확인을 넘어, 실제 현실 세계를 비즈니스 미션설정에 기여할 수 있는 모델을 연구합니다.`}
          </p>
          <TrackIcon width={132} height={132} />
        </div>

        {/* 커리큘럼 */}
        <CurriculumSection steps={steps} />

        {/* 기업 컨택 및 컨퍼런스 */}
        <ConferenceSection />

        {/* 후기 */}
        <section className={styles.reviewSection}>
          <span className={styles.sectionTitle}>당신에게 BOAZ는 어떤 곳이었나요?</span>
          <ReviewSection reviews={reviews} currentPage={reviewPage} onPageChange={setReviewPage} />
        </section>
      </div>
    </main>
  );
};

export default CurriculumPage;
