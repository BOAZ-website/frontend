import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import banner1 from '@/shared/assets/temp_banner/banner1.webp';
import banner2 from '@/shared/assets/temp_banner/banner2.webp';
import banner3 from '@/shared/assets/temp_banner/banner3.webp';
import banner4 from '@/shared/assets/temp_banner/banner4.webp';
import banner5 from '@/shared/assets/temp_banner/banner5.webp';

import * as styles from './banner-slider.css';

const BANNERS = [banner1, banner2, banner3, banner4, banner5];
const INTERVAL_MS = 5000;

const BannerSlider = () => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % BANNERS.length);
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
      <div className={styles.track} style={{ transform: `translateX(-${current * 100}%)` }}>
        {BANNERS.map((src, i) => (
          <div key={i} className={styles.slide}>
            <img src={src} alt={`배너 ${i + 1}`} className={styles.image} />
          </div>
        ))}
      </div>

      <div className={styles.dotsWrapper}>
        {BANNERS.map((_, i) => (
          <button
            key={i}
            type="button"
            className={clsx(styles.dot, i === current && styles.dotActive)}
            onClick={() => handleDotClick(i)}
            aria-label={`배너 ${i + 1}로 이동`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
