import type { ReactNode } from 'react';

import * as styles from './valuecard.css';

interface ValueCardProps {
  icon?: ReactNode;
  children: ReactNode;
}

const ValueCard = ({ icon, children }: ValueCardProps) => {
  return (
    <div className={styles.cardContainer}>
      {/* 백엔드에서 받은 아이콘/이미지 */}
      {icon && <div className={styles.iconWrapper}>{icon}</div>}

      {/* 백엔드에서 받은 텍스트 */}
      <div className={styles.textWrapper}>{children}</div>
    </div>
  );
};

export default ValueCard;
