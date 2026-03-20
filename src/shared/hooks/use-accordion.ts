import { useCallback, useEffect, useState } from 'react';

export const ACCORDION_DURATION_MS = 300;

export const useAccordion = (duration = ACCORDION_DURATION_MS) => {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  const open = useCallback(() => setShouldRender(true), []);

  const close = useCallback(() => {
    setIsOpen(false);
    setTimeout(() => setShouldRender(false), duration);
  }, [duration]);

  const toggle = useCallback(() => {
    if (!isOpen) {
      open();
    } else {
      close();
    }
  }, [isOpen, open, close]);

  useEffect(() => {
    if (!shouldRender) {
      return;
    }

    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setIsOpen(true));
    });

    return () => cancelAnimationFrame(id);
  }, [shouldRender]);

  return { isOpen, shouldRender, toggle, open, close };
};
