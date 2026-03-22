import TrackCardImg from '@/shared/assets/icon/ic_track_character.svg';

import Button from '../button/button';

import * as styles from './trackcard.css';

interface CardProps {
  title: string;
  description: string;
  backTitle: string;
  backDescription: string;
}

const TrackCard = ({ title, description, backTitle, backDescription }: CardProps) => {
  return (
    <article className={styles.cardContainer}>
      <div className={styles.cardFront}>
        <h3 className={styles.cardTitleFront}>{title}</h3>
        <p className={styles.cardDescFront}>{description}</p>
        <TrackCardImg />
        <div className={styles.cardButtonWrapper}>
          <Button preset="small-round_primary">지원하기</Button>
        </div>
      </div>

      <div className={styles.cardBack}>
        <h3 className={styles.cardTitleBack}>{backTitle}</h3>
        <p className={styles.cardDescBack}>{backDescription}</p>
        <TrackCardImg />
        <div className={styles.cardButtonWrapper}>
          <Button preset="small-round_primary">지원하기</Button>
        </div>
      </div>
    </article>
  );
};

export default TrackCard;
