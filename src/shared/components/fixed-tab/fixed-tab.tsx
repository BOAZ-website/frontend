import type { ComponentProps, ReactNode } from 'react';

import { fixedTab } from './fixed-tab.css';

interface FixedButtonProps extends ComponentProps<'button'> {
  isActive?: boolean;
  children: ReactNode;
}

const FixedButton = ({ children, isActive = false, onClick }: FixedButtonProps) => {
  return (
    <button type="button" className={fixedTab({ isActive })} onClick={onClick}>
      {children}
    </button>
  );
};

export default FixedButton;
