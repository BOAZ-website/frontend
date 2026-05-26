import { useEffect, useRef, useState } from 'react';

import type { TermOption } from '@/shared/api/archive';
import ChevronDownIcon from '@/shared/assets/icons/ic_chevron_down.svg?react';

import * as styles from './generation-filter.css';

const ALL_OPTION = { label: '전체', value: undefined } as const;

interface GenerationFilterOverlayProps {
  value: number | undefined;
  onChange: (value: number | undefined) => void;
  options: TermOption[];
}

const GenerationFilterOverlay = ({ value, onChange, options }: GenerationFilterOverlayProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selectedLabel =
    value === undefined ? '기수' : (options.find((o) => o.value === value)?.label ?? '기수');

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const allOptions: { label: string; value: number | undefined }[] = [ALL_OPTION, ...options];

  return (
    <>
      {isOpen && <div className={styles.backdrop} onClick={() => setIsOpen(false)} />}
      <div className={styles.container} ref={ref}>
        <button type="button" className={styles.trigger} onClick={() => setIsOpen(!isOpen)}>
          <span>{selectedLabel}</span>
          <ChevronDownIcon width={16} height={16} />
        </button>

        {isOpen && (
          <div className={styles.overlay}>
            {allOptions.map((opt) => (
              <button
                key={opt.label}
                type="button"
                className={styles.option[opt.value === value ? 'selected' : 'default']}
                onClick={() => {
                  onChange(opt.value);
                  setIsOpen(false);
                }}
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default GenerationFilterOverlay;
