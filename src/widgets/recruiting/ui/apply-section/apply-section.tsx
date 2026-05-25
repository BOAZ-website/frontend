import Section from '@/shared/components/section/section';

import * as styles from './apply-section.css';

import TrackCard from '@/entities/track/ui/track-card/track-card';

const track = [
  { track: '데이터 분석', description: '데이터 분석 소개글' },
  { track: '데이터 시각화', description: '데이터 시각화 소개글' },
  { track: '데이터 엔지니어링', description: '데이터 엔지니어링 소개글' },
];
const ApplySection = () => {
  return (
    <Section subTitle={'Apply'} title={'부문별 소개 및 지원하기'}>
      <div className={styles.trackList}>
        {track.map((item, index) => (
          <TrackCard key={index} title={item.track} description={item.description} />
        ))}
      </div>
    </Section>
  );
};

export default ApplySection;
