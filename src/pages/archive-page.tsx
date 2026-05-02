import ImgCard from '@/shared/components/archive/active-card';

import * as styles from './archive-page.css';

const ARCHIVE_DATA = [
  {
    id: 1,
    title: '보아즈의 꽃, 23회 컨퍼런스 제목 두줄까지 가능 빠밤',
    date: 'Dec 25, 2025',
    generation: '24',
  },
  {
    id: 2,
    title: '데이터 분석 컨퍼런스: 시각화의 미래를 그리다',
    date: 'Jan 10, 2026',
    generation: '24',
  },
  {
    id: 3,
    title: 'AI 모델 최적화 세미나 후기 및 인사이트 공유',
    date: 'Feb 05, 2026',
    generation: '23',
  },
];

const ArchivePage = () => {
  return (
    <div className={styles.container}>
      {ARCHIVE_DATA.map((item) => (
        <ImgCard key={item.id} title={item.title} date={item.date} generation={item.generation} />
      ))}
    </div>
  );
};

export default ArchivePage;
