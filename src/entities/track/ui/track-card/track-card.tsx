import { Link } from 'react-router';

import TrackCardIcon from '@/shared/assets/icons/ic_track_character.svg?react';
import Button from '@/shared/components/button/button';
import { ROUTE_PATH } from '@/shared/router/paths';

import * as styles from './track-card.css';

interface TrackCardProps {
  title: string;
  description: string;
}

const TrackCard = ({ title, description }: TrackCardProps) => (
  <article className={styles.cardContainer}>
    <h3 className={styles.cardTitle}>{title}</h3>
    <p className={styles.cardDesc}>{description}</p>

    <div className={styles.cardIcon}>
      <TrackCardIcon width={241} height={231} />
    </div>

    <div className={styles.cardButtonWrapper}>
      <Link to={ROUTE_PATH.RECRUITING}>
        <Button preset="small-round_primary">지원하기</Button>
      </Link>
    </div>
  </article>
);

export default TrackCard;
