import type { ReactNode } from 'react';
import { assignInlineVars } from '@vanilla-extract/css';

import * as styles from './valuecard.css';
import { themeVars } from '@/shared/styles/theme.css';

interface ValueCardProps {
  backgroundColor?: string;
  icon?: ReactNode; 
  children: ReactNode; 
}

const ValueCard = ({
  backgroundColor = themeVars.color.grayscale[800],
  icon,
  children,
}: ValueCardProps) => {
  return (
    <div
      className={styles.cardContainer}
      style={assignInlineVars({
        [styles.cardBgColorVar]: backgroundColor,
      })}
    >
      {/* 아이콘이 있을 때만 렌더링 */}
      {icon && <div className={styles.iconWrapper}>{icon}</div>}
      
      {/* 텍스트 영역 */}
      <div className={styles.textWrapper}>{children}</div>
    </div>
  );
};

export default ValueCard;