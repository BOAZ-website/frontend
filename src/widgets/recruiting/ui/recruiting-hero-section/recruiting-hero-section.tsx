import { useNavigate } from 'react-router';

import Button from '@/shared/components/button/button';
import GradientBackground from '@/shared/components/gradient-background/gradient-background';
import { useRecruitmentStatus } from '@/shared/queries/use-recruitment-status';
import { ROUTE_PATH } from '@/shared/router/paths';

import * as styles from './recruiting-hero-section.css';

const RecruitingHeroSection = () => {
  const navigate = useNavigate();
  const { data: status } = useRecruitmentStatus();
  const isActive = status?.is_active ?? false;

  return (
    <div className={styles.container}>
      <GradientBackground />
      <div className={styles.content}>
        <h1 className={styles.title}>
          Your Data Journey
          <br />
          Starts Here
        </h1>
        <p className={styles.description}>
          국내 최초 빅데이터 연합동아리 BOAZ는
          <br />
          데이터를 통해 사람과 경험을 연결합니다.
          <br />
          <br />이 여정에 함께할 여러분을 기다립니다.
        </p>
        <Button
          preset="small-round_primary"
          onClick={() => navigate(ROUTE_PATH.APPLY)}
          disabled={!isActive}
        >
          지원하기
        </Button>
      </div>
    </div>
  );
};

export default RecruitingHeroSection;
