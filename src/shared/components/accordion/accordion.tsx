import { type ReactNode } from 'react';

import MinusIcon from '@/shared/assets/icons/ic_minus.svg?react';
import PlusIcon from '@/shared/assets/icons/ic_plus.svg?react';
import { useAccordion } from '@/shared/hooks/use-accordion';

import * as styles from './accordion.css';

interface AccordionProps {
  trigger: ReactNode;
  children: ReactNode;
}

const Accordion = ({ trigger, children }: AccordionProps) => {
  const { isOpen, shouldRender, toggle } = useAccordion();
  const Icon = isOpen ? MinusIcon : PlusIcon;

  return (
    <div className={styles.itemStyle}>
      <button type="button" className={styles.questionStyle} onClick={toggle}>
        <span className={styles.questionText({ open: isOpen })}>{trigger}</span>
        <Icon width={16} height={16} style={{ flexShrink: 0 }} />
      </button>

      <div className={styles.answerWrapper({ open: isOpen })}>
        <div className={styles.answerInner}>
          {shouldRender && <div className={styles.answerContent}>{children}</div>}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
