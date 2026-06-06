import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

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
  const [overlayPos, setOverlayPos] = useState<{ top: number; right: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const iconSize = isMobile ? 16 : 28;

  const selectedOption = TRACK_OPTIONS.find((opt) => opt.value === value) ?? TRACK_OPTIONS[0];

  const handleToggle = () => {
    if (!isOpen && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
      const gap = isMobile ? 1 * rootFontSize : 3.8 * rootFontSize;
      const viewportWidth = document.documentElement.clientWidth;
      setOverlayPos({
        top: rect.bottom + gap,
        right: viewportWidth - rect.right,
      });
    }
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (!containerRef.current?.contains(target) && !overlayRef.current?.contains(target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <div className={styles.container} ref={containerRef}>
        <button type="button" className={styles.trigger} onClick={handleToggle}>
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
      </div>

      {isOpen &&
        createPortal(
          <>
            <div className={styles.backdrop} onClick={() => setIsOpen(false)} />
            <div
              ref={overlayRef}
              className={styles.overlay}
              style={overlayPos ? { top: overlayPos.top, right: overlayPos.right } : undefined}
            >
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
          </>,
          document.body
        )}
    </>
  );
};

export default TrackFilterOverlay;
