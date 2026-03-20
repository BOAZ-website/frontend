import { useEffect, useState } from 'react';

const ANIMATION_DURATION = 300;

interface UseAccordionReturn {
  isOpen: boolean;
  shouldRender: boolean;
  toggle: () => void;
}

export const useAccordion = (duration = ANIMATION_DURATION): UseAccordionReturn => {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  const toggle = () => {
    if (!isOpen) {
      setShouldRender(true);
    } else {
      setIsOpen(false);
      setTimeout(() => setShouldRender(false), duration);
    }
  };

  useEffect(() => {
    if (!shouldRender) {
      return;
    }

    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setIsOpen(true));
    });

    return () => cancelAnimationFrame(id);
  }, [shouldRender]);

  return { isOpen, shouldRender, toggle };
};
