import { Link } from 'react-router';

import { ROUTE_PATH } from '@/shared/router/paths';

import * as sectionStyles from './recruiting-bottom-section.css';
import * as styles from '@/shared/components/fixed-tab/fixed-tab.css';

const RecruitingBottomSection = ({ brochureUrl }: { brochureUrl: string }) => {
  return (
    <div className={sectionStyles.container}>
      <div className={sectionStyles.divider}>
        <div className={sectionStyles.lineLeft} />
        <span className={sectionStyles.dividerText}>
          국내 최초 빅데이터 동아리 BOAZ만의 체계적인 로드맵을 경험하세요
        </span>
        <div className={sectionStyles.lineRight} />
      </div>
      <div className={sectionStyles.buttonGroup}>
        <Link
          to={ROUTE_PATH.CURRICULUM}
          aria-label="커리큘럼으로 이동"
          className={styles.fixedTab({ isActive: true })}
        >
          커리큘럼 보러가기
        </Link>
        <a
          href={brochureUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.fixedTab({ isActive: true })}
        >
          신입기수 홍보 책자
        </a>
      </div>
    </div>
  );
};

export default RecruitingBottomSection;
