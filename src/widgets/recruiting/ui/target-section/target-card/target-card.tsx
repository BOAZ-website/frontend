import type { ReactNode } from 'react';

import * as styles from './target-card.css';

interface ValueCardProps {
  icon: ReactNode;
  text: string;
}

const TargetCard = ({ icon, text }: ValueCardProps) => {
  return (
    <article className={styles.cardContainer}>
      <div className={styles.iconWrapper}>{icon}</div>
      <p className={styles.textWrapper}>{text}</p>
    </article>
  );
};

export default TargetCard;
