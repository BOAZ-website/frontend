import { useEffect, useRef, useState } from 'react';

import ChevronDownIcon from '@/shared/assets/icons/ic_chevron_down.svg?react';

import * as styles from './version-select.css';

interface VersionSelectProps {
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
}

/** 처리방침 시행일 선택. 아카이브 '기수' 필터와 같은 모양이다. */
const VersionSelect = ({ options, value, onChange }: VersionSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selectedLabel = options.find((option) => option.value === value)?.label ?? value;

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
    <>
      {isOpen && <div className={styles.backdrop} onClick={() => setIsOpen(false)} />}
      <div className={styles.container} ref={ref}>
        <button
          type="button"
          className={styles.trigger}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-label={`시행일 ${selectedLabel}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{selectedLabel}</span>
          <ChevronDownIcon className={styles.chevronIcon} />
        </button>

        {isOpen && (
          <div className={styles.overlay} role="listbox">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                role="option"
                aria-selected={option.value === value}
                className={styles.option[option.value === value ? 'selected' : 'default']}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default VersionSelect;
