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
        <h2 className={styles.title}>ADV 기업 컨택 및 컨퍼런스 진행</h2>
        <p className={styles.description}>
          {`BOAZ 컨퍼런스는 1년 간의 여정을 마무리하는 마침표입니다. 지금까지 배우고 탐구했던 모든 것을 담아 하나의 프로젝트로 선보입니다. 또한, 다양한 기업과의 컨택을 통해 협업 기회를 모색할 수 있습니다.`}
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
