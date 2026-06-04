import type { ComponentType, ReactNode, SVGProps } from 'react';
import { useNavigate } from 'react-router';

import Button from '@/shared/components/button/button';
import { ROUTE_PATH } from '@/shared/router/paths';

import * as styles from './track-card.css';

interface TrackCardProps {
  title: string;
  description: ReactNode;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  isActive?: boolean;
}

const TrackCard = ({ title, description, icon: Icon, isActive = false }: TrackCardProps) => {
  const navigate = useNavigate();

  return (
    <article className={styles.cardContainer}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDesc}>{description}</p>

      <div className={styles.cardIcon}>
        <Icon width="100%" height="100%" />
      </div>

      <div className={styles.cardButtonWrapper}>
        <Button
          preset="small-round_primary"
          responsive
          onClick={() => navigate(ROUTE_PATH.APPLY)}
          disabled={!isActive}
        >
          지원하기
        </Button>
      </div>
    </article>
  );
};

export default TrackCard;
