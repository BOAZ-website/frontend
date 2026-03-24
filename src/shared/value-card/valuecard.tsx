import type { ReactNode } from 'react';

import * as styles from './valuecard.css';

interface ValueCardProps {
  icon: ReactNode;
  text: string;
}

const ValueCard = ({ icon, text }: ValueCardProps) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.iconWrapper}>{icon}</div>
      <p className={styles.textWrapper}>{text}</p>
    </div>
  );
};

export default ValueCard;
