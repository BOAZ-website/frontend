import { useState } from 'react';

import TrackCardImg from '@/shared/assets/icon/ic_track_character.svg';

import Button from '../button/button';

import * as styles from './trackcard.css';
import { themeVars } from '@/shared/styles/theme.css';

interface CardProps {
  title: string;
  description: string;
  backTitle: string;
  backDescription: string;
}

const Card = ({ title, description, backTitle, backDescription }: CardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${styles.cardContainer} ${isHovered ? styles.cardHovered : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.cardFront}>
        <div className={styles.cardTitle}>{title}</div>
        <div className={styles.cardDesc}>{description}</div>
        <img src={TrackCardImg} className={styles.cardImage} alt="front" />
        <div className={styles.cardButtonWrapper}>
          <Button preset="small-round_primary">지원하기</Button>
        </div>
      </div>

      <div className={styles.cardBack}>
        <div
          className={styles.cardTitle}
          style={{
            color: themeVars.color.grayscale.white,
          }}
        >
          {backTitle}
        </div>
        <div
          className={styles.cardDesc}
          style={{
            color: themeVars.color.grayscale.white,
          }}
        >
          {backDescription}
        </div>
        <img src={TrackCardImg} className={styles.cardImage} alt="back" />
        <div className={styles.cardButtonWrapper}>
          <Button preset="small-round_primary">지원하기</Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
