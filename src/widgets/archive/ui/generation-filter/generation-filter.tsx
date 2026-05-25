import { useEffect, useRef, useState } from 'react';

import ChevronDownIcon from '@/shared/assets/icons/ic_chevron_down.svg?react';

import * as styles from './generation-filter.css';

const MAX_TERM = 26;

const GENERATION_OPTIONS: { label: string; value: number | undefined }[] = [
  { label: '전체', value: undefined },
  ...Array.from({ length: MAX_TERM + 1 }, (_, i) => MAX_TERM - i).map((term) => ({
    label: term === 0 ? '7기 이전' : `${term}기`,
    value: term,
  })),
];

interface GenerationFilterOverlayProps {
  value: number | undefined;
  onChange: (value: number | undefined) => void;
}

const GenerationFilterOverlay = ({ value, onChange }: GenerationFilterOverlayProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selectedLabel = value === undefined ? '기수' : value === 0 ? '7기 이전' : `${value}기`;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.container} ref={ref}>
      <button type="button" className={styles.trigger} onClick={() => setIsOpen(!isOpen)}>
        <span>{selectedLabel}</span>
        {isOpen ? (
          <ChevronDownIcon width={16} height={16} />
        ) : (
          <ChevronDownIcon width={16} height={16} />
        )}
      </button>

      {isOpen && (
        <div className={styles.overlay}>
          {GENERATION_OPTIONS.map((opt) => (
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
  );
};

export default GenerationFilterOverlay;
