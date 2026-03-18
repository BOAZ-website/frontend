import { useState } from 'react';
import * as styles from './trackcard.css';
import TrackCardImg from '@/shared/assets/icon/ic_track_character.svg';

interface CardProps {
  title: string;
  description: string;                                                                                                                                                                                                          
}

const Card = ({ title, description }: CardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={isHovered ? styles.cardHovered : styles.cardContainer}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 앞 */}
      <div className={styles.cardFront}>
        <div className={styles.cardTitle}>{title}</div>
        <div className={styles.cardDesc}>{description}</div>
        <img src={TrackCardImg} alt="character" style={{ marginTop: 'auto', width: '20rem' }} />
      </div>

      {/* 뒤 */}
      <div className={styles.cardBack}>
        <div className={styles.cardTitle}>뒤집혔어요!</div>
        <div className={styles.cardDesc}>여기는 뒷면입니다.</div>
        <img src={TrackCardImg} alt="character" style={{ marginTop: 'auto', width: '20rem' }} />
      </div>

      <div className={styles.cardButton}>지원하기</div>
    </div>
  );
};

export default Card;