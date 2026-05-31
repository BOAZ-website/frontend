import { useEffect, useRef, useState } from 'react';

import type { ArchiveTrack } from '@/shared/api/archive';
import AnalyzeIcon from '@/shared/assets/icons/ic_analyze.svg?react';
import EngineeringIcon from '@/shared/assets/icons/ic_engineering.svg?react';
import ChevronUpIcon from '@/shared/assets/icons/ic_expand_more.svg?react';
import ChevronDownIcon from '@/shared/assets/icons/ic_keyboard_arrow_up.svg?react';
import VisualizationIcon from '@/shared/assets/icons/ic_visualization.svg?react';
import useIsMobile from '@/shared/hooks/use-is-mobile';

import * as styles from './track-filter.css';

type TrackIcon = React.ComponentType<React.SVGProps<SVGSVGElement>>;

const TRACK_OPTIONS: { label: string; value: ArchiveTrack | undefined; Icon: TrackIcon | null }[] =
  [
    { label: '전체', value: undefined, Icon: null },
    { label: '분석', value: 'ANALYSIS', Icon: AnalyzeIcon },
    { label: '시각화', value: 'VISUALIZATION', Icon: VisualizationIcon },
    { label: '엔지니어링', value: 'ENGINEERING', Icon: EngineeringIcon },
  ];

interface TrackFilterOverlayProps {
  value: ArchiveTrack | undefined;
  onChange: (value: ArchiveTrack | undefined) => void;
}

const TrackFilterOverlay = ({ value, onChange }: TrackFilterOverlayProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const iconSize = isMobile ? 16 : 28;

  const selectedOption = TRACK_OPTIONS.find((opt) => opt.value === value) ?? TRACK_OPTIONS[0];

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
        <button type="button" className={styles.trigger} onClick={() => setIsOpen(!isOpen)}>
          {selectedOption.Icon && (
            <selectedOption.Icon width={iconSize} height={iconSize} className={styles.icon} />
          )}
          <span className={styles.triggerLabel}>{selectedOption.label} 부문</span>
          {isOpen ? (
            <ChevronDownIcon className={styles.chevronIcon} />
          ) : (
            <ChevronUpIcon className={styles.chevronIcon} />
          )}
        </button>

        {isOpen && (
          <div className={styles.overlay}>
            {TRACK_OPTIONS.filter((opt) => opt.value !== value).map((opt) => (
              <button
                key={opt.label}
                type="button"
                className={styles.option.default}
                onClick={() => {
                  onChange(opt.value);
                  setIsOpen(false);
                }}
              >
                {opt.Icon ? (
                  <opt.Icon width={iconSize} height={iconSize} className={styles.icon} />
                ) : null}
                {opt.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default TrackFilterOverlay;
