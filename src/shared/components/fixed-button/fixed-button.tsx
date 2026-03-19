import type { ReactNode } from 'react';

import * as styles from './fixed-button.css';

interface FixedButtonProps {
  isActive?: boolean;
  onClick?: () => void;
  children: ReactNode;
}

const FixedButton = ({ children, isActive = false, onClick }: FixedButtonProps) => {
  return (
    <button
      type="button"
      className={`${styles.base} ${styles.variants[isActive ? 'active' : 'inactive']}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default FixedButton;
