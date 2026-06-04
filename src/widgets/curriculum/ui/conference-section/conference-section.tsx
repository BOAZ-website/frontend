import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { useNavigate } from 'react-router';

import conferenceThumbnail1 from '@/shared/assets/conference-banner-img/1.webp';
import conferenceThumbnail2 from '@/shared/assets/conference-banner-img/2.webp';
import conferenceThumbnail3 from '@/shared/assets/conference-banner-img/3.webp';
import RightArrowIcon from '@/shared/assets/icons/ic_arrow_right_black.svg?react';
import Button from '@/shared/components/button/button';

import * as styles from './conference-section.css';

const IMAGES = [conferenceThumbnail1, conferenceThumbnail2, conferenceThumbnail3];
const INTERVAL_MS = 3000;

const ConferenceSection = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % IMAGES.length);
    }, INTERVAL_MS);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const handleDotClick = (index: number) => {
    setCurrent(index);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    startTimer();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.sliderWrapper}>
        <div className={styles.sliderTrack} style={{ transform: `translateX(-${current * 100}%)` }}>
          {IMAGES.map((src, i) => (
            <div key={i} className={styles.sliderSlide}>
              <img src={src} alt={`컨퍼런스 ${i + 1}`} className={styles.sliderImage} />
            </div>
          ))}
        </div>
        <div className={styles.dotsWrapper}>
          {IMAGES.map((_, i) => (
            <button
              key={i}
              type="button"
              className={clsx(styles.dot, i === current && styles.dotActive)}
              onClick={() => handleDotClick(i)}
              aria-label={`이미지 ${i + 1}로 이동`}
            />
          ))}
        </div>
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>기업 컨택 및 컨퍼런스 진행</h2>
        <p className={styles.description}>
          {`BOAZ는 뛰어난 인재들이 모여 여러 기구\n기업 컨택을 진행합니다.\n현 산업체 고수들과 함께 진행됩니다.\n그리고 최종적으로 컨퍼런스에서 그 성과를 발표해요.`}
        </p>
        <Button preset="medium_white" hasIcon responsive onClick={() => navigate('/archive')}>
          자세히 보기
          <RightArrowIcon className={styles.buttonIcon} />
        </Button>
      </div>
    </div>
  );
};

export default ConferenceSection;
