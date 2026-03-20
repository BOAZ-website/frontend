import { type ReactNode, useLayoutEffect, useRef } from 'react';

import MinusIcon from '@/shared/assets/icon/ic_minus.svg?react';
import PlusIcon from '@/shared/assets/icon/ic_plus.svg?react';
import { useAccordion } from '@/shared/hooks/use-accordion';

import * as styles from './accordion.css';

interface AccordionProps {
  trigger: ReactNode;
  children: ReactNode;
}

const Accordion = ({ trigger, children }: AccordionProps) => {
  const { isOpen, shouldRender, toggle } = useAccordion();

  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;
    if (!wrapper || !content) {
      return;
    }

    wrapper.style.setProperty('--accordion-content-height', `${content.scrollHeight}px`);
  }, [shouldRender]);

  return (
    <div className={styles.itemStyle}>
      <button type="button" className={styles.questionStyle} onClick={toggle}>
        <span className={styles.questionText({ open: isOpen })}>{trigger}</span>
        {isOpen ? <MinusIcon width={16} height={16} /> : <PlusIcon width={16} height={16} />}
      </button>

      {shouldRender && (
        <div ref={wrapperRef} className={styles.answerWrapper({ open: isOpen })}>
          <div ref={contentRef} className={styles.answerContent}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordion;
