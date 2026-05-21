import { useEffect, useRef, useState } from 'react';

import type { ArchiveTrack } from '@/shared/api/archive';
import ChevronDownIcon from '@/shared/assets/icons/ic_chevron_down.svg?react';

import * as styles from './track-filter.css';

const TRACK_OPTIONS: { label: string; value: ArchiveTrack | undefined }[] = [
  { label: '전체', value: undefined },
  { label: '분석', value: 'ANALYSIS' },
  { label: '시각화', value: 'VISUALIZATION' },
  { label: '엔지니어링', value: 'ENGINEERING' },
];

interface TrackFilterOverlayProps {
  value: ArchiveTrack | undefined;
  onChange: (value: ArchiveTrack | undefined) => void;
}

const TrackFilterOverlay = ({ value, onChange }: TrackFilterOverlayProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selectedLabel = TRACK_OPTIONS.find((opt) => opt.value === value)?.label ?? '부문';

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
          {TRACK_OPTIONS.map((opt) => (
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

export default TrackFilterOverlay;
