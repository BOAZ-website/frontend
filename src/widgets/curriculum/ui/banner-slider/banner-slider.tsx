import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import banner1 from '@/shared/assets/banner-img/1.webp';
import banner2 from '@/shared/assets/banner-img/2.webp';
import banner3 from '@/shared/assets/banner-img/3.webp';
import banner4 from '@/shared/assets/banner-img/4.webp';
import banner5 from '@/shared/assets/banner-img/5.webp';

import * as styles from './banner-slider.css';

const BANNERS = [banner1, banner2, banner3, banner4, banner5];
// 마지막에 첫 번째 복제본을 추가해 무한 루프처럼 보이게 함
const SLIDES = [...BANNERS, banner1];
const INTERVAL_MS = 3000;

const BannerSlider = () => {
  const [current, setCurrent] = useState(0);
  const [animated, setAnimated] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => prev + 1);
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

  // 복제본(index 5)에 도달하면 transition 없이 index 0으로 순간이동
  useEffect(() => {
    if (current === BANNERS.length) {
      const id = setTimeout(() => {
        setAnimated(false);
        setCurrent(0);
      }, 600); // transition 시간과 맞춤
      return () => clearTimeout(id);
    }
    if (!animated) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setAnimated(true);
    }
  }, [current, animated]);

  const handleDotClick = (index: number) => {
    setAnimated(true);
    setCurrent(index);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    startTimer();
  };

  const dotIndex = current === BANNERS.length ? 0 : current;

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.track}
        style={{
          transform: `translateY(-${current * 33}rem)`,
          transition: animated ? undefined : 'none',
        }}
      >
        {SLIDES.map((src, i) => (
          <div key={i} className={styles.slide}>
            <img src={src} alt={`배너 ${(i % BANNERS.length) + 1}`} className={styles.image} />
          </div>
        ))}
      </div>

      <div className={styles.dotsWrapper}>
        {BANNERS.map((_, i) => (
          <button
            key={i}
            type="button"
            className={clsx(styles.dot, i === dotIndex && styles.dotActive)}
            onClick={() => handleDotClick(i)}
            aria-label={`배너 ${i + 1}로 이동`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
