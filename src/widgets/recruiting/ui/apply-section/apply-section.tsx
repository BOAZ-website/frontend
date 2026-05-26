import AnalyzeIcon from '@/shared/assets/icons/ic_analyze.svg?react';
import EngineeringIcon from '@/shared/assets/icons/ic_engineering.svg?react';
import VisualizationIcon from '@/shared/assets/icons/ic_visualization.svg?react';
import Section from '@/shared/components/section/section';

import * as styles from './apply-section.css';

import TrackCard from '@/entities/track/ui/track-card/track-card';
const track = [
  {
    track: '데이터 분석',
    description: `데이터 분석은 최신 AI 모델을 활용해 데이터 속 심층적인 맥락과 패턴을 학습하여 최적의 해답을 도출하는 기술을 연구합니다. 단순한 수치 계산을 넘어 비정형 데이터 속 숨겨진 의미를 발견하고, 실제 문제 해결과 더 나아가 \n미래 전략 설계에 \n적용하는 AI 기술을 \n탐구합니다.`,
    icon: AnalyzeIcon,
  },
  {
    track: '데이터 시각화',
    description: `데이터 시각화는 복잡한 데이터를 직관적으로 해석하고, 핵심 인사이트를 효과적으로 전달하는 과정입니다. 단순히 차트를 만드는 것을 넘어 데이터를 탐색·분석하고, 다양한 시각화 도구와 인터랙티브 대시보드를 통해 실제 \n의사결정에 활용 \n가능한 데이터 경험을\n설계합니다.`,
    icon: VisualizationIcon,
  },
  {
    track: '데이터 엔지니어링',
    description: `데이터 엔지니어링은 “데이터를 잘 모으고, 잘 정리해서, 필요할 때 바로 쓸 수 있게 만드는 일” 입니다. 따라서 데이터를 수집·정리·저장·가공하는 과정을 배우며, 누구나 신뢰하고 쉽게 활용할 수 있는 데이터 환경을 만드는 기술과 \n역할을 익힙니다.`,
    icon: EngineeringIcon,
  },
];

const ApplySection = () => {
  return (
    <Section subTitle={'Apply'} title={'부문별 소개 및 지원하기'}>
      <div className={styles.trackList}>
        {track.map((item, index) => (
          <TrackCard
            key={index}
            title={item.track}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </Section>
  );
};

export default ApplySection;
