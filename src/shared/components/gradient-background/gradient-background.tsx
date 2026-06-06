import useGradientBackground from '@/shared/hooks/use-gradient-background';

import * as styles from './gradient-background.css';

const GradientBackground = () => {
  const { interactiveRef, canvasRef } = useGradientBackground();

  return (
    <div className={styles.frame}>
      <div className={styles.bgGradient}>
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <filter id="gradient-bg-goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className={styles.gradientsContainer}>
          <div className={`${styles.blob} ${styles.g1}`} />
          <div className={`${styles.blob} ${styles.g2}`} />
          <div className={`${styles.blob} ${styles.g3}`} />
          <div className={`${styles.blob} ${styles.g4}`} />
          <div className={`${styles.blob} ${styles.g5}`} />
          <div ref={interactiveRef} className={styles.interactive} />
        </div>
      </div>
      <div className={styles.blurLayer} aria-hidden="true" />
      <div className={styles.gradientWash} aria-hidden="true" />
      <canvas ref={canvasRef} className={styles.noiseOverlay} aria-hidden="true" />
    </div>
  );
};

export default GradientBackground;
