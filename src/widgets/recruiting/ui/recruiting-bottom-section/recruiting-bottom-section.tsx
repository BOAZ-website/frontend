import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router';

import { ROUTE_PATH } from '@/shared/router/paths';

import { RECRUITMENT_QUERY_OPTIONS } from '../../model/recruitment.query-options';

import * as styles from './recruiting-bottom-section.css';
import * as TabStyles from '@/shared/components/fixed-tab/fixed-tab.css';

const RecruitingBottomSection = () => {
  const { data: status } = useQuery(RECRUITMENT_QUERY_OPTIONS.STATUS());
  const { data: recruitment } = useQuery(RECRUITMENT_QUERY_OPTIONS.DETAIL(status?.term));

  return (
    <div className={styles.container}>
      <span className={styles.dividerText}>
        국내 최초 빅데이터 동아리 BOAZ만의 체계적인 로드맵을 경험하세요
      </span>
      <div className={styles.buttonGroup}>
        <Link
          to={ROUTE_PATH.CURRICULUM}
          aria-label="커리큘럼으로 이동"
          className={TabStyles.fixedTab({ isActive: true })}
        >
          커리큘럼 보러가기
        </Link>
        {recruitment?.brochure_url && (
          <a
            href={recruitment.brochure_url}
            target="_blank"
            rel="noopener noreferrer"
            className={TabStyles.fixedTab({ isActive: true })}
          >
            신입기수 홍보 책자
          </a>
        )}
      </div>
    </div>
  );
};

export default RecruitingBottomSection;
