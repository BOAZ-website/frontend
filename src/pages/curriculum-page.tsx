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
import AnalyzeIcon from '@/shared/assets/icons/ic_analyze.svg?react';
import EngineeringIcon from '@/shared/assets/icons/ic_engineering.svg?react';
import VisualizationIcon from '@/shared/assets/icons/ic_visualization.svg?react';

import * as styles from './curriculum-page.css';

const TRACK_TAB_TO_API = {
  분석: 'ANALYSIS',
  시각화: 'VISUALIZATION',
  엔지니어링: 'ENGINEERING',
} as const satisfies Record<TrackTab, 'ANALYSIS' | 'VISUALIZATION' | 'ENGINEERING'>;

const TRACK_META: Record<
  TrackTab,
  {
    quote: string;
    desc: string;
    Icon: typeof AnalyzeIcon | typeof VisualizationIcon | typeof EngineeringIcon;
  }
> = {
  분석: {
    quote: '"데이터를 스스로 해석하고 최적의 해답을 제시하는 AI 분석을 선도합니다."',
    desc: `데이터 분석은 이제 사후 확인을 넘어 실시간 예측과 대응의 영역입니다. 딥러닝 기반으로 데이터 속 패턴을 학습해 예측·분류·생성 모델을 직접 구현하고, 최신 인공지능 아키텍처를 실험하고 주도하며 고도의 분석 인사이트를 도출합니다.`,
    Icon: AnalyzeIcon,
  },
  시각화: {
    quote: '"데이터 속 흐름을 구조화해 실행 가능한 인사이트로 전환합니다."',
    desc: `데이터 시각화는 복잡한 데이터를 직관적으로 해석하고 핵심 인사이트를 효과적으로 전달하는 과정입니다. 다양한 시각화 도구와 인터랙티브 대시보드를 활용해 데이터 스토리텔링을 구현하며, 실제 의사결정에 활용 가능한 데이터 경험을 설계합니다.`,
    Icon: VisualizationIcon,
  },
  엔지니어링: {
    quote: '"데이터를 수집하고 변환해 저장하는 흐름을 설계합니다."',
    desc: `데이터 엔지니어링은 다양한 CS 지식과 클라우드 인프라를 바탕으로, 끊임없이 생성되고 흘러가는 데이터를 안정적으로 수집·처리·저장하는 방법을 탐구합니다. 이를 통해 데이터가 실제로 활용될 수 있는 기반을 만들어냅니다.`,
    Icon: EngineeringIcon,
  },
};

const CurriculumPage = () => {
  const [activeTab, setActiveTab] = useState<TrackTab>('분석');
  const [reviewPage, setReviewPage] = useState(1);

  const apiTrack = TRACK_TAB_TO_API[activeTab];
  const { quote, desc, Icon } = TRACK_META[activeTab];

  const { data: curriculums = [] } = useQuery(CURRICULUM_QUERY_OPTIONS.LIST(apiTrack));
  const { data: reviews = [] } = useQuery(REVIEW_QUERY_OPTIONS.LIST({ track: apiTrack }));

  const currentCurriculum = curriculums.find((c) => c.track === apiTrack);
  const steps = currentCurriculum?.curriculum_steps ?? [];

  const handleTabChange = (tab: TrackTab) => {
    setActiveTab(tab);
    setReviewPage(1);
  };

  return (
    <main className={styles.page}>
      <BannerSlider />

      <div className={styles.tabRow}>
        <TrackTabGroup defaultTab={activeTab} onTabChange={handleTabChange} />
      </div>

      <div className={styles.section}>
        <div className={styles.quoteBox}>
          <p className={styles.quoteText}>{quote}</p>
          <p className={styles.quoteDesc}>{desc}</p>
          <Icon width={132} height={132} className={styles.trackIcon} />
        </div>

        <CurriculumSection steps={steps} />

        <ConferenceSection />
      </div>

      {/* 후기 - section div 바깥 */}
      <section className={styles.reviewSection}>
        <div className={styles.dividerRow}>
          <div className={styles.dividerLineLeft} />
          <span className={styles.sectionTitle}>당신에게 BOAZ는 어떤 곳이었나요?</span>
          <div className={styles.dividerLineRight} />
        </div>
        <div className={styles.reviewContent}>
          <ReviewSection reviews={reviews} currentPage={reviewPage} onPageChange={setReviewPage} />
        </div>
      </section>
    </main>
  );
};

export default CurriculumPage;
