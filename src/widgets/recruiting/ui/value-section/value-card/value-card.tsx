import type { ReactNode } from 'react';

import * as styles from './value-card.css';

interface ValueCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ValueCard = ({ icon, title, description }: ValueCardProps) => {
  return (
    <article className={styles.cardContainer}>
      <div className={styles.iconWrapper}>{icon}</div>
      <div className={styles.textWrapper}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
};

export default ValueCard;
